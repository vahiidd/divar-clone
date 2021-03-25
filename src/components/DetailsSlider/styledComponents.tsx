import React, { FC } from "react";
import { Flex, FlexProps } from "@react-yuki/ui";

export const SlideContainer: FC<FlexProps> = props => (
  <Flex
    {...props}
    __css={{
      position: "relative",
      ".swiper-container": {
        width: "100%",
        height: "20rem"
      },
      ".swiper-pagination": {
        "&.swiper-pagination-fraction": {
          color: "white",
          fontWeight: 5
        }
      },
      ".swiper-pagination-bullet-active.swiper-pagination-bullet": {
        bg: "gray.9",
        opacity: 1
      },
      ".swiper-pagination-bullet": {
        bg: "white",
        opacity: 1
      },
      ".swiper-pagination-progressbar .swiper-pagination-progressbar-fill": {
        bg: "dark"
      },
      "&#thumbs-gallery-with-two-way-control": {
        ".swiper-container": {
          position: "relative",
          bg: "white",
          "&:first-child": {
            width: "100%",
            height: "50rem"
          },
          "&:last-child": {
            height: ["2.5rem", "25%"],
            boxSizing: "border-box",
            mt: "0.5rem",
            ".swiper-slide": {
              width: "25%",
              height: ["2.5rem", "5rem"],
              opacity: 0.4
            },
            ".swiper-slide-active": {
              opacity: 1
            }
          }
        },
        ".swiper-slide": {
          backgroundPosition: "center",
          backgroundSize: "cover"
        }
      }
    }}
  />
);
