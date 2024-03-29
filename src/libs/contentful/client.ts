import { createClient } from "contentful";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENV,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_HOST,
} = process.env;

if (
  !CONTENTFUL_SPACE_ID ||
  !CONTENTFUL_ENV ||
  !CONTENTFUL_ACCESS_TOKEN ||
  !CONTENTFUL_PREVIEW_ACCESS_TOKEN ||
  !CONTENTFUL_PREVIEW_HOST
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
  host: CONTENTFUL_PREVIEW_HOST,
});

export type ContentfulClientOptions = {
  previewMode?: boolean;
};

export function contentfulClient(options: ContentfulClientOptions = {}) {
  if (options?.previewMode) {
    return previewClient.withoutUnresolvableLinks;
  }

  return publishedClient.withoutUnresolvableLinks;
}
