"use client";

import NextImage, { type ImageProps as NextImageProps, type ImageLoaderProps } from "next/image";

export type ImageProps = NextImageProps;

export function Image(props: ImageProps) {
  const { src, loader, ...imageProps } = props;

  if (typeof src === "string" && src.startsWith("//images.ctfassets.net")) {
    return <NextImage src={`https:${src}`} loader={contentfulLoader} {...imageProps} />;
  }

  return <NextImage src={src} loader={loader} {...imageProps} />;
}

function contentfulLoader(props: ImageLoaderProps): string {
  const { src, width, quality = 80 } = props;

  const url = new URL(src);

  if (/\.gif$/gi.test(url.href)) {
    return url.href;
  }

  const params = new URLSearchParams({
    fm: "jpg",
    fl: "progressive",
    q: quality.toString(),
    w: width.toString(),
  });

  url.search = params.toString();

  return url.href;
}
