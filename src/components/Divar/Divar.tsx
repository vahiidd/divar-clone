import { Grid } from '@material-ui/core';
import VerticalNavbar from '../VerticalNavbar/VerticalNavbar';
import Search from '../Search/Search';
import Suggestion from '../SuggestionBar/Suggestion';
import BannerList from '../Banner/BannerList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import CitiesBox from '../CitiesBox/CitiesBox';
import { DivarContext } from '../../context/DivarProvider';
import React, { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation, useParams } from 'react-router';
import Cookies from 'js-cookie';

const Divar = () => {
  const {
    apiData,
    getApiData,
    city,
    setCity,
    category,
    setCategory,
    navbarSwitch,
    widgetList,
    setWidgetList,
  } = useContext(DivarContext);
  const [searchValue, setSearchValue] = useState('');
  const cityParam: { city: string } = useParams();
  const location = useLocation();

  const getNextWidgetList = () => {
    getApiData(searchValue, true);
  };

  useEffect(() => {
    setCity(cityParam.city);
    if (location.search) setSearchValue(location.search.split('=')[1]);
    else setSearchValue('');
    const pathNameSplit = location.pathname.split('/');
    if (pathNameSplit.length === 3) setCategory(pathNameSplit[2]);
    else setCategory('');
    Cookies.set('city', cityParam.city);
    setWidgetList([]);
    getApiData(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    category,
    searchValue,
    city,
    navbarSwitch,
    location.pathname,
    location.search,
  ]);

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
