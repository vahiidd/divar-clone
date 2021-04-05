import { Box, createStyles, Theme } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import CustomSeparator from '../Breadcrumbs/CustomSeparator';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import Description from '../Description/Description';
import DetailsSlider from '../DetailsSlider/DetailsSlider';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router';
import { ProductContext } from '../../context/ProductProvider';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '50px 10px 20px',
    },
    slider: {
      width: '50%',
    },
  })
);

const ProductPage = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const { token } = useParams<{ token: string }>();
  const { pageData, getPageData } = useContext(ProductContext);

  useEffect(() => {
    setLoading(true);
    (async () => {
      await getPageData(token);
      window.scrollTo({ top: 0 });
      setLoading(false);
    })();
  }, [getPageData, token]);

  if (loading) return <LoadingSpinner />;

  return (
    <Box>
      <Container style={{ marginTop: '110px', maxWidth: '1090px' }}>
        <CustomSeparator />
        <Box className={classes.content}>
          <Description />
          <DetailsSlider />
        </Box>
      </Container>
      {'widgets' in pageData &&
        pageData.widgets.suggestions.suggestion_available && (
          <SimilarProducts />
        )}
      <Footer />
    </Box>
  );
};

export default ProductPage;
