import React from 'react';
import { globalStyles } from './stylesConfig';
import { Global } from '@emotion/core';
import { Box, Typography } from '@material-ui/core';
import Slider from './Slider';

const SimilarProducts = () => (
  <>
    <Global styles={globalStyles} />
    <Box p={4}>
      <Typography
        style={{ fontFamily: 'Vazir', marginBottom: '15px', fontSize: '17px' }}
        color='textPrimary'
      >
        کالا های مشابه در دیوار فروشگاه ها
      </Typography>
      <Box>
        <Slider
          style={{ width: '80%' }}
          hasImage={true}
          params={{
            slidesPerView: 4,
            spaceBetween: 18,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }}
        />
      </Box>
    </Box>
  </>
);

export default SimilarProducts;
