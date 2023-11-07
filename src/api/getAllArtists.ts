import { getClient } from "~/libs/apollo/client.rsc";
import { gql } from "~/libs/apollo/graphql";

const query = gql(/* GraphQL */ `
  query AllArtists {
    artists: artistCollection(limit: 500) {
      items {
        slug
        pagePath @client
      }
    }
  }
`);

export async function getAllArtists() {
  const { data } = await getClient().query({
    query,
  });

  return data?.artists?.items;
}
