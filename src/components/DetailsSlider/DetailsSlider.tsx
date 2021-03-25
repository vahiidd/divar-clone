import React from 'react';
import { globalStyles } from './stylesConfig';
import { Global } from '@emotion/core';
import { Box, Heading } from '@react-yuki/ui';
import Slider from './Slider';

const DetailsSlider = () => (
  <>
    <Global styles={globalStyles} />
    <Box p={4}>
      <Box>
        <Heading
          as='h1'
          color='orange.4'
          fontSize={13}
          m={0}
          my={4}
          fontWeight={1}
          textAlign='center'
        >
          Thumbs Gallery With Two-way Control - Example
        </Heading>
      </Box>
      <Box>
        <Slider
          style={{ width: '100%' }}
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
    </Box>
  </>
);

export default DetailsSlider;
