import { getClient } from "~/libs/apollo/client.rsc";
import { gql } from "~/libs/apollo/graphql";

const query = gql(/* GraphQL */ `
  query ArtistPage($artistSlug: String!) {
    page: artistCollection(where: { slug: $artistSlug }) {
      items {
        name
        slug
        accentColor
        pagePath @client
      }
    }
    videos: videoCollection(where: { artist: { slug: $artistSlug } }) {
      items {
        title
        slug
        pagePath @client
        artist {
          name
          slug
          accentColor
        }
      }
    }
  }
`);

export async function getArtistPageData(variables: { artistSlug: string }) {
  const { data } = await getClient().query({
    query,
    variables,
  });

  return { page: data?.page?.items[0], videos: data?.videos?.items };
}
