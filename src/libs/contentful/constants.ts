const { CONTENTFUL_SPACE_ID, CONTENTFUL_ENV, CONTENTFUL_ACCESS_TOKEN } = process.env;

const gqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENV}`;
const gqlEndpointWithAuthParam = `${gqlEndpoint}?access_token=${CONTENTFUL_ACCESS_TOKEN}`;
const authorizationHeader = `Bearer ${CONTENTFUL_ACCESS_TOKEN}`;

export const CONTENTFUL = {
  gqlEndpoint,
  gqlEndpointWithAuthParam,
  authorizationHeader,
};
