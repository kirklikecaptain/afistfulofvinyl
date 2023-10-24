import { getClient } from "~/libs/apollo/client.rsc";
import { gql } from "./graphql";

export async function getAllVideos() {
  const query = gql(/* GraphQL */ `
    query allVideos {
      videos: videoCollection(limit: 500) {
        items {
          slug
          artist {
            slug
          }
        }
      }
    }
  `);

  const { data } = await getClient().query({
    query,
  });

  return { videos: data?.videos?.items };
}
