import Cookies from 'js-cookie';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { api } from '../api/api_types';

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

const DivarProvider: React.FC = ({ children }) => {
  const [apiData, setApiData] = useState<api>({});
  const [city, setCity] = useState(() => Cookies.get('city'));
  const [nextPage, setNextPage] = useState('');
  const [category, setCategory] = useState('');
  const [navbarSwitch, setNavbarSwitch] = useState<switchType>({
    [SwitchNames.URGENT]: false,
    [SwitchNames.PHOTO]: false,
    [SwitchNames.STORE]: false,
  });
  const url = `https://api.divar.ir/v8/web-search/${city}`;
  const getApiData = useCallback(
    async (search: string, next?: boolean) => {
      const qSearch = search ? '?q=' + search : '';
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
      } else if (next) qNext = '?' + qNext;
      try {
        const fetchUrl = category
          ? `${url}/${category}${filter}${qNext}${qSearch}`
          : `${url}${filter}${qNext}${qSearch}`;
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setApiData(data);
        setNextPage(data.seo_details.next.split('?')[1]);
        return true;
      } catch (error) {
        console.error(error);
      }
    },
    [category, navbarSwitch, nextPage, url]
  );

  useEffect(() => {
    getApiData('');
  }, [getApiData]);

  return (
    <DivarContext.Provider
      value={{
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
