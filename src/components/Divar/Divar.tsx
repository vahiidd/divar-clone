import { Grid } from '@material-ui/core';
import VerticalNavbar from '../VerticalNavbar/VerticalNavbar';
import Search from '../Search/Search';
import Suggestion from '../SuggestionBar/Suggestion';
import BannerList from '../Banner/BannerList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { DivarContext } from '../../context/DivarProvider';
import React, { useContext, useEffect, useState } from 'react';

const Divar = () => {
  const { apiData, getApiData } = useContext(DivarContext);
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    getApiData(searchValue, category);
  }, [getApiData, searchValue, category]);

  return (
    <Grid container>
      <Grid xs={3}>
        <VerticalNavbar />
      </Grid>
      <Grid xs={9}>
        <Search setSearchValue={setSearchValue} />
        {'suggestion_list' in apiData && (
          <Suggestion
            setCategory={setCategory}
            suggestion_list={apiData.suggestion_list}
          />
        )}

        {'widget_list' in apiData ? (
          <BannerList widget_list={apiData.widget_list} />
        ) : (
          <LoadingSpinner />
        )}
      </Grid>
    </Grid>
  );
};

export default Divar;
