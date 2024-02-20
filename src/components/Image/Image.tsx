import { memo } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { AspectRatio } from "@mantine/core";

import { parseImageProps } from "./Image.utils";
export interface ImageProps extends NextImageProps {
  aspectRatio?: "16:9" | "4:3" | "3:2" | "1:1";
}

export const Image = memo(function Image(props: ImageProps) {
  const { src, loader, aspectRatio, ...otherProps } = parseImageProps(props);

  if (aspectRatio) {
    return (
      <AspectRatio ratio={aspectRatio}>
        <NextImage fill src={src} loader={loader} {...otherProps} />
      </AspectRatio>
    );
  }

  return <NextImage src={src} loader={loader} {...otherProps} />;
});
