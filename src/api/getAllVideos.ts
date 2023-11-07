import { getClient } from "~/libs/apollo/client.rsc";
import { gql } from "~/libs/apollo/graphql";

const query = gql(/* GraphQL */ `
  query AllVideos {
    videos: videoCollection(limit: 500) {
      items {
        slug
        pagePath @client
        artist {
          slug
        }
      }
    }
  }
`);

export async function getAllVideos() {
  const { data } = await getClient().query({
    query,
  });

  return { videos: data?.videos?.items };
}
