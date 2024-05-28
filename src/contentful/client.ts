import { createClient } from "contentful";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENV,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_HOST,
} = process.env;

const publishedClient = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
  environment: CONTENTFUL_ENV!,
});

const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  environment: CONTENTFUL_ENV!,
  host: CONTENTFUL_PREVIEW_HOST!,
});

export type ClientOptions = {
  preview?: boolean;
};

export function contentful(options?: ClientOptions) {
  return options?.preview ? previewClient.withoutUnresolvableLinks : publishedClient.withoutUnresolvableLinks;
}
