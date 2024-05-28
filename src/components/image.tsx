"use client";
import NextImage, { type ImageProps as NextImageProps, type ImageLoaderProps } from "next/image";

export type ImageProps = { aspectRatio?: number } & NextImageProps;

export function Image(props: ImageProps) {
  const { src, loader, aspectRatio, ...imageProps } = props;
  let _src = props.src;
  let _loader = props.loader;

  if (typeof _src === "string" && _src.startsWith("//images.ctfassets.net")) {
    _src = `https:${src}`;
    _loader = (loaderProps) => contentfulLoader(loaderProps, props.aspectRatio);
  }

  return <NextImage src={_src} loader={_loader} {...imageProps} />;
}

function contentfulLoader(props: ImageLoaderProps, aspectRatio?: number): string {
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
