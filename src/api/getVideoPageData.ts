import { getClient } from "~/libs/apollo/client.rsc";
import { gql } from "./graphql";

interface VideoPageVariables {
  artistSlug: string;
  videoSlug: string;
}

export async function getVideoPageData(variables: VideoPageVariables) {
  const query = gql(/* GraphQL */ `
    query videoPage($artistSlug: String!, $videoSlug: String!) {
      page: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {
        items {
          title
          slug
          artist {
            name
            slug
            accentColor
          }
        }
      }
    }
  `);

  const { data } = await getClient().query({
    query,
    variables,
  });

  return { page: data?.page?.items[0] };
}
