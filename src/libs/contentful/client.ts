import { createClient } from "contentful";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_PREVIEW_ACCESS_TOKEN } =
  process.env;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN || !CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
  throw new Error("Contentful environment variables are not set");
}

const publishedClient = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
});

const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: "preview.contentful.com",
});

export default function contentfulClient({ preview } = { preview: false }) {
  return preview ? previewClient : publishedClient;
}
