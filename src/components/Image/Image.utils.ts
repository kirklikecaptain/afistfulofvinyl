import { type ImageLoaderProps } from "next/image";

import { LinkedAsset } from "~/libs/contentful/types";

import { type ImageProps } from "./Image";

type LoaderOptions = {
  aspectRatio: ImageProps["aspectRatio"];
};

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
    const ratio = parseAspectRatio(aspectRatio);
    const height = Math.floor(width / ratio);

    url.searchParams.set("h", height.toString());
    url.searchParams.set("fit", "fill");
    url.searchParams.set("f", "faces");
  }

  return url.href;
}

export function parseAspectRatio(aspectRatio: ImageProps["aspectRatio"]) {
  if (typeof aspectRatio !== "string" || !aspectRatio.includes(":")) {
    throw new Error("Invalid aspect ratio syntax. Must be in the format `w:h`. ex: 16:9 or 1:1");
  }

  const [w, h] = aspectRatio.split(":");
  const ratio = Number(w) / Number(h);

  return Math.round(ratio * 100) / 100;
}

export function parseImageProps(props: ImageProps): ImageProps {
  const { src, loader, aspectRatio, ...otherProps } = props;

  if (typeof src === "string" && src.startsWith("//images.ctfassets.net")) {
    return {
      src: `https:${src}`,
      loader: (loaderProps) => contentfulLoader(loaderProps, { aspectRatio }),
      aspectRatio,
      ...otherProps,
    };
  }

  return {
    src,
    loader,
    aspectRatio,
    ...otherProps,
  };
}

export function resolveImageProps(asset?: LinkedAsset): ImageProps | null {
  if (!asset || !asset.fields.file) {
    return null;
  }

  return {
    src: asset.fields.file.url,
    alt: asset.fields.description || "",
    width: asset.fields.file.details.image?.width,
    height: asset.fields.file.details.image?.height,
  };
}
