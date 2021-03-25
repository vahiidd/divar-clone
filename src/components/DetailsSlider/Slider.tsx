import React, { FC, useRef, useEffect } from "react";
import Swiper, { ReactIdSwiperProps, SwiperRefNode } from "react-id-swiper";
import { generateSlides } from "./utils";
import { SlideContainer } from "./styledComponents";
import { SliderProps, Slide } from "./types";
import SlideItem from "./SlideItem";

export const renderSlide = ({ id, ...rest }: Slide, idx: number) => (
  <SlideItem {...rest} key={`${id}-slideContent-${idx}`} width={1} />
);

const Slider: FC<SliderProps> = ({ params = [], id, hasImage, ...styles }) => {
  const [gallerySwiperParams, thumbnailSwiperParams] = params as ReactIdSwiperProps[];

  const gallerySwiperRef = useRef<SwiperRefNode>(null);

  const thumbnailSwiperRef = useRef<SwiperRefNode>(null);

  const data = generateSlides({ id: 'gallery', hasImage });

  useEffect(() => {
    const gallerySwiper =  gallerySwiperRef?.current?.swiper;

    const thumbnailSwiper = thumbnailSwiperRef?.current?.swiper;

    if (gallerySwiper?.controller && thumbnailSwiper?.controller) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, []);

  return (
    <SlideContainer {...styles} id={id} flexDirection="column">
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
