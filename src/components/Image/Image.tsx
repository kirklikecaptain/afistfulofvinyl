"use client";

import { useMemo } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { AspectRatio } from "@mantine/core";

import { parseAspectRatio, parseImageProps } from "./Image.utils";

export type ImageProps = NextImageProps & {
  aspectRatio?: "16:9" | "4:3" | "3:2" | "1:1";
  maxWidth?: number;
};

export function Image(props: ImageProps) {
  const newProps = useMemo(() => parseImageProps(props), [props]);

  const { src, aspectRatio, width, maxWidth, loader, ...otherProps } = newProps;

  if (aspectRatio) {
    const ratio = parseAspectRatio(aspectRatio);

    return (
      <AspectRatio ratio={ratio} w={width || "100%"} maw={maxWidth}>
        <NextImage fill src={src} loader={loader} {...otherProps} />
      </AspectRatio>
    );
  }

  return <NextImage src={src} loader={loader} width={width} {...otherProps} />;
}
