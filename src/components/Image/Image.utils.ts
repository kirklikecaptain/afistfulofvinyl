import { type ImageLoaderProps } from "next/image";

import { type ImageProps } from "./Image";

interface ParsedSrc {
  href: ImageProps["src"];
  loader?: ImageProps["loader"];
}

export function parseSrc(src: ImageProps["src"]): ParsedSrc {
  if (typeof src === "string" && src.startsWith("//images.ctfassets.net")) {
    return {
      href: `https:${src}`,
      loader: contentfulImageLoader,
    };
  }

  return { href: src };
}

export function contentfulImageLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
  const url = new URL(src);

  url.searchParams.set("fm", "webp");
  url.searchParams.set("w", width.toString());
  url.searchParams.set("q", quality.toString());

  return url.href;
}
