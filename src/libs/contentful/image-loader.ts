// Docs: https://www.contentful.com/developers/docs/references/images-api/

interface ContentfulLoaderParams {
  src: string;
  width: number;
  quality?: number;
}

export default function contentfulLoader({ src, width, quality }: ContentfulLoaderParams) {
  const url = new URL(src);
  url.searchParams.set("fm", "webp");
  url.searchParams.set("w", width.toString());
  url.searchParams.set("q", (quality || 85).toString());

  return url.href;
}
