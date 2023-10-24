import { getClient } from "~/libs/apollo/client.rsc";
import { gql } from "./graphql";

export async function getAllArtists() {
  const query = gql(/* GraphQL */ `
    query allArtists {
      artists: artistCollection(limit: 500) {
        items {
          slug
        }
      }
    }
  `);

  const { data } = await getClient().query({
    query,
  });

  return data?.artists?.items;
}
