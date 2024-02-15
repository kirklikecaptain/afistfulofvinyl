import { createClient } from "contentful";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENV,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
} = process.env;

if (
  !CONTENTFUL_SPACE_ID ||
  !CONTENTFUL_ENV ||
  !CONTENTFUL_ACCESS_TOKEN ||
  !CONTENTFUL_PREVIEW_ACCESS_TOKEN
) {
  throw new Error("Required Contentful variables not found in `.env.local`");
}

const publishedClient = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  environment: CONTENTFUL_ENV,
});

const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  environment: CONTENTFUL_ENV,
  host: "preview.contentful.com",
});

export function contentfulClient({ preview } = { preview: false }) {
  return preview
    ? previewClient.withoutUnresolvableLinks
    : publishedClient.withoutUnresolvableLinks;
}
