import { Grid } from '@material-ui/core';
import VerticalNavbar from '../VerticalNavbar/VerticalNavbar';
import Search from '../Search/Search';
import Suggestion from '../SuggestionBar/Suggestion';
import BannerList from '../Banner/BannerList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { DivarContext } from '../../context/DivarProvider';
import React, { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Divar = () => {
  const {
    apiData,
    getApiData,
    city,
    category,
    navbarSwitch,
    widgetList,
    setWidgetList,
  } = useContext(DivarContext);
  const [searchValue, setSearchValue] = useState('');

  const getNextWidgetList =  () => {
    getApiData(searchValue, true);
  };

  useEffect(() => {
    setWidgetList([]);
    getApiData(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, searchValue, city, navbarSwitch]);

  return (
    <Grid container>
      <Grid xs={3}>
        <VerticalNavbar />
      </Grid>
      <Grid xs={9}>
        <Search setSearchValue={setSearchValue} />
        {'suggestion_list' in apiData && (
          <Suggestion suggestion_list={apiData.suggestion_list} />
        )}

        {widgetList.length ? (
          <InfiniteScroll
            dataLength={widgetList.length}
            next={getNextWidgetList}
            hasMore={true}
            loader={<LoadingSpinner />}
          >
            <BannerList widget_list={widgetList} />
          </InfiniteScroll>
        ) : (
          <LoadingSpinner />
        )}
      </Grid>
    </Grid>
  );
};

export default Divar;
