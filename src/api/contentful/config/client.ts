import { createClient } from "contentful";
import { draftMode } from "next/headers";

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

export const contentful = draftMode().isEnabled
  ? previewClient.withoutUnresolvableLinks
  : publishedClient.withoutUnresolvableLinks;
