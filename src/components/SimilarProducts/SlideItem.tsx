import React, { FC } from 'react';
import { Box, CardMedia, Typography } from '@material-ui/core';
import { Slide as SlideProps } from './types';

const Slide: FC<SlideProps> = ({
  imageUrl,
  customContent,
  title,
  bottom_text,
  ...styles
}) => {
  const slideStyles = {
    ...styles,
  };

  let renderedContent = (
    <Box
      border='1px solid lightgray'
      borderRadius='3px'
      height='100%'
      width='100%'
      textAlign='right'
    >
      <CardMedia image={imageUrl} style={{ height: '10rem', width: '100%' }} />
      <Box p={2}>
        <Typography
          color='textPrimary'
          style={{ fontFamily: 'Vazir', fontSize: '13px', marginBottom: '5px' }}
        >
          {title}
        </Typography>
        <Typography
          color='textSecondary'
          style={{ fontFamily: 'Vazir', fontSize: '11px' }}
        >
          {bottom_text}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      {...slideStyles}
    >
      {renderedContent}
    </Box>
  );
};

Slide.displayName = 'Slide';

export default Slide;
