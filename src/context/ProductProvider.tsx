import React, { createContext, useCallback, useState } from 'react';
import { productPage } from '../api/api_types';

export const ProductContext = createContext<{
  pageData: productPage;
  getPageData: Function;
}>({
  pageData: {},
  getPageData: () => {},
});

const url = 'https://api.divar.ir/v5/posts';

const ProductProvider: React.FC = ({ children }) => {
  const [pageData, setPageData] = useState<productPage>({});
  const getPageData = useCallback(async (token) => {
    try {
      const response = await fetch(`${url}/${token}`);
      const data = await response.json();
      setPageData(data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <ProductContext.Provider value={{ pageData, getPageData }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
