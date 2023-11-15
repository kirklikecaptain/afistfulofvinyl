const { CONTENTFUL_SPACE_ID, CONTENTFUL_ENV, CONTENTFUL_ACCESS_TOKEN } = process.env;

export const contentful = {
  graphqlEndpoint: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENV}`,
  authorizationHeader: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
};
