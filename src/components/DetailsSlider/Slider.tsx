import React, { FC, useRef, useEffect, useContext } from 'react';
import Swiper, { ReactIdSwiperProps, SwiperRefNode } from 'react-id-swiper';
import { SlideContainer } from './styledComponents';
import { SliderProps, Slide } from './types';
import SlideItem from './SlideItem';
import { ProductContext } from '../../context/ProductProvider';

export const renderSlide = ({ id, ...rest }: Slide, idx: number) => (
  <SlideItem {...rest} key={`${id}-slideContent-${idx}`} width={1} />
);

const Slider: FC<SliderProps> = ({ params = [], id, hasImage, ...styles }) => {
  const { pageData } = useContext(ProductContext);
  const [
    gallerySwiperParams,
    thumbnailSwiperParams,
  ] = params as ReactIdSwiperProps[];
  const gallerySwiperRef = useRef<SwiperRefNode>(null);
  const thumbnailSwiperRef = useRef<SwiperRefNode>(null);

  // const data = generateSlides({ id: 'gallery', hasImage });
  const data =
    'widgets' in pageData
      ? pageData.widgets.images.map((imageUrl) => ({
          id,
          content: '',
          useImageAsTag: false,
          imageUrl,
        }))
      : [];

  useEffect(() => {
    const gallerySwiper = gallerySwiperRef?.current?.swiper;

    const thumbnailSwiper = thumbnailSwiperRef?.current?.swiper;

    if (gallerySwiper?.controller && thumbnailSwiper?.controller) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, []);

  return (
    <SlideContainer {...styles} id={id} flexDirection='column'>
      <Swiper {...{ ...gallerySwiperParams }} ref={gallerySwiperRef}>
        {data.map(renderSlide)}
      </Swiper>
      <Swiper {...{ ...thumbnailSwiperParams }} ref={thumbnailSwiperRef}>
        {data.map(renderSlide)}
      </Swiper>
    </SlideContainer>
  );
};

export default Slider;
