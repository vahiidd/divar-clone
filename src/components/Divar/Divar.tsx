import { Grid } from '@material-ui/core';
import VerticalNavbar from '../VerticalNavbar/VerticalNavbar';
import Search from '../Search/Search';
import Suggestion from '../SuggestionBar/Suggestion';
import BannerList from '../Banner/BannerList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { DivarContext } from '../../context/DivarProvider';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { widget } from '../../api/api_types';

const Divar = () => {
  const { apiData, getApiData, city } = useContext(DivarContext);
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('');
  const [widgetList, setWidgetList] = useState<widget[]>([]);

  const getNextWidgetList = async () => {
    // (() => {
    if (await getApiData(searchValue, category, true)) {
      if ('widget_list' in apiData)
        setWidgetList((pre) => pre.concat(apiData.widget_list));
    }
    // })();
  };

  useEffect(() => {
    getApiData(searchValue, category);
    setWidgetList([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, searchValue, city]);

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
          <InfiniteScroll
            dataLength={widgetList.length}
            next={getNextWidgetList}
            hasMore={true}
            loader={<LoadingSpinner />}
          >
            <BannerList
              widget_list={
                widgetList.length === 0 ? apiData.widget_list : widgetList
              }
            />
          </InfiniteScroll>
        ) : (
          <LoadingSpinner />
        )}
      </Grid>
    </Grid>
  );
};

export default Divar;
