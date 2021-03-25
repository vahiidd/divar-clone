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

export const DivarContext = createContext<{
  city: string | undefined;
  setCity: Dispatch<SetStateAction<string | undefined>>;
  apiData: api;
  getApiData: Function;
}>({
  city: undefined,
  setCity: () => {},
  apiData: {},
  getApiData: () => {},
});

const DivarProvider: React.FC = ({ children }) => {
  const [apiData, setApiData] = useState<api>({});
  const [city, setCity] = useState(() => Cookies.get('city'));
  const [nextPage, setNextPage] = useState('');
  const url = `https://api.divar.ir/v8/web-search/${city}`;
  const getApiData = useCallback(
    async (search: string, category: string, next?: boolean) => {
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
    [nextPage, url]
  );

  // useEffect(() => {
  //   getApiData('', '');
  // }, [getApiData]);

  return (
    <DivarContext.Provider value={{ city, setCity, apiData, getApiData }}>
      {children}
    </DivarContext.Provider>
  );
};

export default DivarProvider;
