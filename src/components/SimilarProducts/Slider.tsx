import React, { FC, useContext } from 'react';
import Swiper from 'react-id-swiper';
import { SlideContainer } from './styledComponents';
import { SliderProps, Slide } from './types';
import SlideItem from './SlideItem';
import { ProductContext } from '../../context/ProductProvider';
import { Link } from 'react-router-dom';

export const renderSlide = ({ id, token, ...rest }: Slide, idx: number) => (
  <Link to={`/ProductPage/${token}`} style={{ textDecoration: 'none' }}>
    <SlideItem {...rest} key={`${id}-slideContent-${idx}`} />
  </Link>
);

const Slider: FC<SliderProps> = ({
  hasImage,
  useImageAsTag,
  params,
  id,
  ...styles
}) => {
  const { pageData } = useContext(ProductContext);

  const data =
    'widgets' in pageData
      ? pageData.widgets.suggestions.posts.map(
          ({ image, title, bottom_text, post_view_payload }) => ({
            id,
            token: post_view_payload.token,
            title,
            bottom_text,
            imageUrl: image,
          })
        )
      : [];

  return (
    <SlideContainer {...styles} id={id}>
      <Swiper {...params}>{data.map(renderSlide)}</Swiper>
    </SlideContainer>
  );
};

export default Slider;
