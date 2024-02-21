import { type ImageLoaderProps } from "next/image";

import { type ImageProps } from "./Image";

interface LoaderOptions {
  aspectRatio?: number;
}

function contentfulLoader(props: ImageLoaderProps, options: LoaderOptions): string {
  const { src, width, quality = 80 } = props;
  const { aspectRatio } = options;

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

function parseAspectRatio(aspectRatio?: ImageProps["aspectRatio"]) {
  if (!aspectRatio) {
    return;
  }

  if (typeof aspectRatio !== "string" || !aspectRatio.includes(":")) {
    throw new Error("Invalid aspect ratio syntax. Must be in the format `w:h`. ex: 16:9 or 1:1");
  }

  const [w, h] = aspectRatio.split(":");
  const ratio = Number(w) / Number(h);

  return Math.round(ratio * 100) / 100;
}

export function parseImageProps(props: ImageProps) {
  const { src: _src, loader: _loader, aspectRatio: _aspectRatio, ...otherProps } = props;

  let src = _src;
  let loader = _loader;
  const aspectRatio = parseAspectRatio(_aspectRatio);

  // Contentful Image
  if (typeof src === "string" && src.startsWith("//images.ctfassets.net")) {
    src = `https:${src}`;
    loader = (loaderProps) => contentfulLoader(loaderProps, { aspectRatio });
  }

  return {
    src,
    loader,
    aspectRatio,
    ...otherProps,
  };
}
