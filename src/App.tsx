import React, { useEffect, useState } from 'react';
import { api } from './api/api_types';
import BannerList from './components/Banner/BannerList';
import styles from './styles/App.module.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import VerticalNavbar from './components/VerticalNavbar/VerticalNavbar';
import Search from './components/Search/Search';
import Suggestion from './components/SuggestionBar/Suggestion';
import SimilarProducts from './components/SimilarProducts/SimilarProducts';
import ProductPage from './components/ProductPage/ProductPage';
import { Grid } from '@material-ui/core';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

function App() {
  const [apiData, setApiData] = useState<api | {}>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.divar.ir/v8/web-search/tehran'
        );
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <ProductPage />
        
      </div>
    </Router>
  );

  // return (
  //   <Router>
  //     <div className={styles.app}>
  //       <Navbar />
  //       <Grid container>
  //         <Grid xs={3}>
  //           <VerticalNavbar />
  //         </Grid>
  //         <Grid xs={9}>
  //           <Search />
  //           {'suggestion_list' in apiData && (
  //             <Suggestion suggestion_list={apiData.suggestion_list} />
  //           )}

  //           {'widget_list' in apiData ? (
  //             <BannerList widget_list={apiData.widget_list} />
  //           ) : (
  //             <LoadingSpinner />
  //           )}
  //         </Grid>
  //       </Grid>
  //     </div>
  //   </Router>
  // );
}

export default App;
