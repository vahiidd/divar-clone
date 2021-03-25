import { Box, Button, createStyles, Grid, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CustomSeparator from '../Breadcrumbs/CustomSeparator';
import MapLocation from '../MapLocation/MapLocation';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import Description from '../Description/Description';
import DetailsSlider from '../DetailsSlider/DetailsSlider';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router';
import { productPage } from '../../api/api_types';

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

const url = 'https://api.divar.ir/v5/posts';

const ProductPage = () => {
  const classes = useStyles();
  const { token } = useParams<{ token: string }>();
  const [pageData, setPageData] = useState<productPage>({});

  useEffect(() => {
    try {
      fetch(`${url}/${token}`)
        .then((response) => response.json())
        .then((data) => {
          setPageData(data);
        });
    } catch (error) {
      console.error(error);
    }
  }, [token]);

  return (
    <Box>
      <Container style={{ marginTop: '110px', maxWidth: '1090px' }}>
        <CustomSeparator />
        <Box className={classes.content}>
          {'data' in pageData && (
            <Description
              title={pageData.data.share.title}
              description={pageData.data.share.description}
            />
          )}
          <DetailsSlider />
        </Box>

        {/* <Box width="500px" height="200px">
          <MapLocation />
        </Box> */}
      </Container>
      <SimilarProducts />
      <Footer />
    </Box>
  );
};

export default ProductPage;
