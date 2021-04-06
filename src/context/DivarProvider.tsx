import Cookies from 'js-cookie';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { api, widget } from '../api/api_types';

export enum SwitchNames {
  STORE = 'is-store=true',
  PHOTO = 'has-photo=true',
  URGENT = 'urgent=true',
}

export interface switchType {
  [SwitchNames.URGENT]: boolean;
  [SwitchNames.PHOTO]: boolean;
  [SwitchNames.STORE]: boolean;
}

export const DivarContext = createContext<{
  widgetList: widget[];
  setWidgetList: Dispatch<SetStateAction<widget[]>>;
  navbarSwitch: switchType;
  setNavbarSwitch: Dispatch<SetStateAction<switchType>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  city: string | undefined;
  setCity: Dispatch<SetStateAction<string | undefined>>;
  apiData: api;
  getApiData: Function;
  url: string;
}>({
  widgetList: [],
  setWidgetList: () => {},
  navbarSwitch: {
    [SwitchNames.URGENT]: false,
    [SwitchNames.PHOTO]: false,
    [SwitchNames.STORE]: false,
  },
  setNavbarSwitch: () => {},
  category: '',
  setCategory: () => {},
  city: undefined,
  setCity: () => {},
  apiData: {},
  getApiData: () => {},
  url: '',
});

const useSetInitialCity = () => {
  const location = useLocation();
  const pathnameCity = location.pathname.split('/')[1];
  if (pathnameCity) {
    Cookies.set('city', pathnameCity);
    return pathnameCity;
  }
  return Cookies.get('city');
};

const useSetInitialCategory = () => {
  const location = useLocation();
  const pathNameSplit = location.pathname.split('/');
  if (pathNameSplit.length === 3) return pathNameSplit[2];
  return '';
};

const DivarProvider: React.FC = ({ children }) => {
  const [apiData, setApiData] = useState<api>({});
  const [city, setCity] = useState(useSetInitialCity);
  const [nextPage, setNextPage] = useState('');
  const [category, setCategory] = useState(useSetInitialCategory);
  const [widgetList, setWidgetList] = useState<widget[]>([]);
  const [navbarSwitch, setNavbarSwitch] = useState<switchType>({
    [SwitchNames.URGENT]: false,
    [SwitchNames.PHOTO]: false,
    [SwitchNames.STORE]: false,
  });
  const url = `https://api.divar.ir/v8/web-search/${city}`;
  const getApiData = (search: string, next = false) => {
    let qSearch = search ? 'q=' + search : '';
    let qNext = next ? nextPage : '';
    let filter = '';
    Object.entries(navbarSwitch).forEach(([key, value]) => {
      if (value) {
        if (filter.length) filter += '&';
        filter += key;
      }
    });
    if (filter.length) {
      filter = '?' + filter;
      if (next) qNext = '&' + qNext;
    } else if (qNext.length) qNext = '?' + qNext;

    if (filter.length || qNext.length) qSearch = '&' + qSearch;
    else if (qSearch.length) qSearch = '?' + qSearch;

    const fetchUrl = category
      ? `${url}/${category}${filter}${qNext}${qSearch}`
      : `${url}${filter}${qNext}${qSearch}`;
    (async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setApiData(data);
        setNextPage(data.seo_details.next.split('?')[1]);
        if (next) {
          setWidgetList((pre) => pre.concat(data.widget_list));
        } else {
          setWidgetList(data.widget_list);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  };

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (city && location.pathname === '/') history.push(`/${city}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DivarContext.Provider
      value={{
        widgetList,
        setWidgetList,
        navbarSwitch,
        setNavbarSwitch,
        category,
        setCategory,
        city,
        setCity,
        apiData,
        getApiData,
        url,
      }}
    >
      {children}
    </DivarContext.Provider>
  );
};

export default DivarProvider;
