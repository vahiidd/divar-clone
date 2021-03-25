import React from 'react';
import { globalStyles } from './stylesConfig';
import { Global } from '@emotion/core';
import { Box } from '@react-yuki/ui';
import Slider from './Slider';

const DetailsSlider = () => (
  <>
    <Global styles={globalStyles} />
    <Box p={4}>
      <Slider
        style={{ width: '100%', height: '92vh' }}
        id='thumbs-gallery-with-two-way-control'
        hasImage
        params={[
          {
            spaceBetween: 10,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          },
          {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true,
          },
        ]}
      />
    </Box>
  </>
);

export default DetailsSlider;
