"use client";

import Image, { type ImageProps, type ImageLoaderProps } from "next/image";
import { Image as MantineImage, type ImageProps as MantineImageProps } from "@mantine/core";
import { type Asset } from "contentful";

interface NextImageProps extends Omit<ImageProps, "style" | "src" | "alt">, MantineImageProps {
  src?: ImageProps["src"] | Asset<"WITHOUT_UNRESOLVABLE_LINKS">;
  alt?: string;
}

export function NextImage({
  src,
  alt = "",
  h = "auto",
  w = "100%",
  ...otherProps
}: NextImageProps) {
  const parsedProps = parseImageSrc(src);

  return (
    <MantineImage
      component={Image}
      {...parsedProps}
      {...otherProps}
      h={h}
      w={w}
      alt={parsedProps.alt || alt}
    />
  );
}

function parseImageSrc(src: NextImageProps["src"]): NextImageProps {
  if (typeof src === "object" && "fields" in src) {
    if (!src.fields.file) {
      return { src: undefined };
    }

    return {
      src: `https:${src.fields.file.url}`,
      alt: src.fields.description ?? "",
      width: src.fields.file?.details.image?.width,
      height: src.fields.file?.details.image?.height,
      loader: contentfulImageLoader,
    };
  }

  return { src };
}

function contentfulImageLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
  const url = new URL(src);

  url.searchParams.set("fm", "webp");
  url.searchParams.set("w", width.toString());
  url.searchParams.set("q", quality.toString());

  return url.href;
}
