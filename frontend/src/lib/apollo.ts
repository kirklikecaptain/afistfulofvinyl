import { CMS_API_TOKEN, CMS_API_URL } from "@/config";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export { gql } from "@apollo/client";

export const apollo = new ApolloClient({
  uri: CMS_API_URL,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${CMS_API_TOKEN}`,
  },
});
