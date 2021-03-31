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
  STORE = 'store',
  PHOTO = 'photo',
  INSTANT = 'instant',
}

export const DivarContext = createContext<{
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  city: string | undefined;
  setCity: Dispatch<SetStateAction<string | undefined>>;
  apiData: api;
  getApiData: Function;
  url: string;
}>({
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
  const url = `https://api.divar.ir/v8/web-search/${city}`;
  const getApiData = useCallback(
    async (search: string, next?: boolean) => {
      const qSearch = search ? '?q=' + search : '';
      const qNext = next ? '?' + nextPage : '';
      try {
        const fetchUrl = category
          ? `${url}/${category}${qSearch}${qNext}`
          : `${url}${qSearch}${qNext}`;
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setApiData(data);
        setNextPage(data.seo_details.next.split('?')[1]);
        return true;
      } catch (error) {
        console.error(error);
      }
    },
    [category, nextPage, url]
  );

  useEffect(() => {
    getApiData('');
  }, [getApiData]);

  return (
    <DivarContext.Provider
      value={{ category, setCategory, city, setCity, apiData, getApiData, url }}
    >
      {children}
    </DivarContext.Provider>
  );
};

export default DivarProvider;
