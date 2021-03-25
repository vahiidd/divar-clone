import React, { FC } from 'react';
import { Flex, Box, Heading, Image, theme } from '@react-yuki/ui';
import { SlideProps } from './types';

const Slide: FC<SlideProps> = ({
  imageUrl,
  fill,
  content,
  customContent,
  useImageAsTag,
  ...styles
}) => {
  const slideStyles = {
    ...styles,
  };

  let renderedContent = (
    <>
      <Image alt='img' src={imageUrl} width='100%' className='swiper-lazy' />
    </>
  );
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      height='20rem'
      {...slideStyles}
    >
      {renderedContent}
    </Flex>
  );
};

Slide.defaultProps = {
  fill: theme.colors.gray[2],
};

Slide.displayName = 'Slide';

export default Slide;
