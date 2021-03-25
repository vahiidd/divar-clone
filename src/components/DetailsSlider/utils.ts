import { GenerateSlides } from "./types";
import { theme } from "./stylesConfig";
import { Colors } from "./types";

export const generateSlides: GenerateSlides = options => {
  const { id, content = "Slide", hasImage, useImageAsTag } = options;

  const colorList = [
    "cyan",
    "yellow",
    "fuschia",
    "teal",
    "pink",
    "blue",
    "lime",
    "violet"
  ];

  const colors: Colors = theme.colors;

  return colorList.map((colorName: string, idx: number) => ({
    id,
    content: `${content} #${idx + 1}`,
    fill: colors[colorName][4],
    useImageAsTag,
    ...(hasImage && {
      imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100) +
        idx}/320/1200`
    })
  }));
};
