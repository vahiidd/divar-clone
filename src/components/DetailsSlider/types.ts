import { ReactNode } from "react";
import { FlexProps } from "@react-yuki/ui";
import { ReactIdSwiperProps } from "react-id-swiper";

interface SlideGeneratorOption {
  id?: string;
  content?: string;
  hasImage?: boolean;
  useImageAsTag?: boolean;
}

export type GenerateSlides = (params: SlideGeneratorOption) => Slide[];

export interface Slide {
  id?: string;
  fill?: string;
  content: string;
  customContent?: ReactNode;
  imageUrl?: string;
  useImageAsTag?: boolean;
}

export interface SliderProps extends FlexProps {
  showNav?: boolean;
  params: ReactIdSwiperProps | ReactIdSwiperProps[];
  id?: string;
  hasImage?: boolean;
  useImageAsTag?: boolean;
}

export interface SlideProps extends Slide, Omit<FlexProps, "content"> {}

export interface Colors {
  [key: string]: string | string[];
}
