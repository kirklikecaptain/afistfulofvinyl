import { getClient } from "~/libs/apollo/client.rsc";
import { gql } from "./graphql";

interface ArtistPageVariables {
  artistSlug: string;
}

export async function getArtistPageData(variables: ArtistPageVariables) {
  const query = gql(/* GraphQL */ `
    query artistPage($artistSlug: String!) {
      page: artistCollection(where: { slug: $artistSlug }) {
        items {
          name
          slug
          accentColor
        }
      }
      videos: videoCollection(where: { artist: { slug: $artistSlug } }) {
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

  return { page: data?.page?.items[0], videos: data?.videos?.items };
}
