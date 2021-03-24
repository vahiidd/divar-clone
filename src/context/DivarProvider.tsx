import { createContext, useCallback, useEffect, useState } from 'react';
import { api } from '../api/api_types';

const url = 'https://api.divar.ir/v8/web-search/tehran';

export const DivarContext = createContext<{
  apiData: api;
  getApiData: Function;
}>({
  apiData: {},
  getApiData: () => {},
});

const DivarProvider: React.FC = ({ children }) => {
  const [apiData, setApiData] = useState<api>({});

  const getApiData = useCallback(async (search: string, category: string) => {
    try {
      const fetchUrl = category
        ? `${url}/${category}?q=${search}`
        : `${url}?q=${search}`;
      const response = await fetch(fetchUrl);
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getApiData('', '');
  }, [getApiData]);

  return (
    <DivarContext.Provider value={{ apiData, getApiData }}>
      {children}
    </DivarContext.Provider>
  );
};

export default DivarProvider;
