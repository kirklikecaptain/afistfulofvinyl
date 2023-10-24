import { CONTENTFUL } from "../contentful/constants";

export const linkConfig = {
  uri: CONTENTFUL.gqlEndpoint,
  headers: {
    Authorization: CONTENTFUL.authorizationHeader,
  },
};
