"use client";

import { useMemo } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { Image as MantineImage, type ImageProps as MantineImageProps } from "@mantine/core";

import { parseSrc } from "./Image.utils";

export interface ImageProps
  extends Omit<NextImageProps, keyof MantineImageProps>,
    MantineImageProps {}

export function Image(props: ImageProps) {
  const { src, alt = "", h = "auto", w = "100%", ...rest } = props;

  const { href, loader } = useMemo(() => parseSrc(src), [src]);

  return (
    <MantineImage
      src={href}
      component={NextImage}
      loader={loader}
      h={h}
      w={w}
      alt={alt}
      {...rest}
    />
  );
}
