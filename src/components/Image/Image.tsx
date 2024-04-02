"use client";

import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { AspectRatio } from "@mantine/core";

import { contentfulLoader, parseAspectRatio } from "./Image.utils";

export type ImageProps = NextImageProps & {
  aspectRatio?: "16:9" | "4:3" | "3:2" | "1:1";
  maxWidth?: number;
};

export function Image(props: ImageProps) {
  const { src, loader, aspectRatio, maxWidth, width, ...otherProps } = props;

  let newSrc = src;
  let newLoader = loader;

  if (typeof src === "string" && src.startsWith("//images.ctfassets.net")) {
    newSrc = `https:${src}`;
    newLoader = (loaderProps) => contentfulLoader(loaderProps, aspectRatio);
  }

  if (aspectRatio) {
    const ratio = parseAspectRatio(aspectRatio);

    return (
      <AspectRatio ratio={ratio} w={width} maw={maxWidth}>
        <NextImage fill src={newSrc} loader={newLoader} {...otherProps} />
      </AspectRatio>
    );
  }

  return <NextImage src={newSrc} loader={newLoader} width={width} {...otherProps} />;
}
