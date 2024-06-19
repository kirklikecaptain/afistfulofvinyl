import { GraphQLClient } from "graphql-request";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ENV, CONTENTFUL_PREVIEW_ACCESS_TOKEN } = process.env;

export const contentfulApiUrl = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENV}`;
export const contentfulHeaders = {
  Authorization: `Bearer ${CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
};

export const contentful = new GraphQLClient(contentfulApiUrl, {
  headers: contentfulHeaders,
  // errorPolicy: "all",
});
