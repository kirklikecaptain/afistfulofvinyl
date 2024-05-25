"use client";

import NextImage, { type ImageProps as NextImageProps, type ImageLoaderProps } from "next/image";

type ImageProps = { aspectRatio?: number } & NextImageProps;

export function Image(props: ImageProps) {
  const { src, loader, width, height, aspectRatio, ...otherProps } = props;

  let newSrc = src ?? "/images/placeholder-image.svg";
  let newLoader = loader;

  if (typeof src === "string" && src.startsWith("//images.ctfassets.net")) {
    newSrc = `https:${src}`;
    newLoader = (loaderProps) => contentfulLoader(loaderProps, aspectRatio);
  }

  return (
    <NextImage src={newSrc} loader={newLoader} width={width} height={height} {...otherProps} />
  );
}

export function contentfulLoader(props: ImageLoaderProps, aspectRatio?: number): string {
  const { src, width, quality = 80 } = props;

  const url = new URL(src);

  if (/\.gif$/gi.test(url.href)) {
    return url.href;
  }

  url.searchParams.set("fm", "jpg");
  url.searchParams.set("fl", "progressive");
  url.searchParams.set("q", quality.toString());
  url.searchParams.set("w", width.toString());

  if (aspectRatio) {
    const height = Math.floor(width / aspectRatio);

    url.searchParams.set("h", height.toString());
    url.searchParams.set("fit", "fill");
    url.searchParams.set("f", "faces");
  }

  return url.href;
}
