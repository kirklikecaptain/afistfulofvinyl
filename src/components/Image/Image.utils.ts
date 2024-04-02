import { type ImageLoaderProps } from "next/image";

import { LinkedAsset } from "~/api/types";

import { type ImageProps } from "./Image";

export function contentfulLoader(
  props: ImageLoaderProps,
  aspectRatio?: ImageProps["aspectRatio"],
): string {
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
