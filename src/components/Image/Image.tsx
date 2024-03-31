"use client";

import { useMemo } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { AspectRatio } from "@mantine/core";

import { parseImageProps } from "./Image.utils";

export type ImageProps = NextImageProps & {
  aspectRatio?: "16:9" | "4:3" | "3:2" | "1:1";
};

export function Image(props: ImageProps) {
  const { src, loader, aspectRatio, width, ...otherProps } = useMemo(
    () => parseImageProps(props),
    [props],
  );

  if (aspectRatio) {
    return (
      <AspectRatio ratio={aspectRatio} w={width}>
        <NextImage fill src={src} loader={loader} {...otherProps} />
      </AspectRatio>
    );
  }

  return <NextImage src={src} loader={loader} width={width} {...otherProps} />;
}
