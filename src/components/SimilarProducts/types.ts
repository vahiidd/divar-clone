import { ReactNode } from 'react';
import { FlexProps } from '@react-yuki/ui';
import { ReactIdSwiperProps } from 'react-id-swiper';

interface SlideGeneratorOption {
  id?: string;
  content?: string;
  hasImage?: boolean;
  useImageAsTag?: boolean;
}

export type GenerateSlides = (params: SlideGeneratorOption) => Slide[];

export interface Slide {
  token?: string;
  id?: string;
  customContent?: ReactNode;
  imageUrl?: string;
  title: string;
  bottom_text: string;
}

export interface SliderProps extends FlexProps {
  showNav?: boolean;
  params?: ReactIdSwiperProps | ReactIdSwiperProps[];
  id?: string;
  hasImage?: boolean;
  useImageAsTag?: boolean;
}

export interface Colors {
  [key: string]: string | string[];
}
