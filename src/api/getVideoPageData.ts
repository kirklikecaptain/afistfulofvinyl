import { getClient } from "~/libs/apollo/client.rsc";
import { gql } from "~/libs/apollo/graphql";

const query = gql(/* GraphQL */ `
  query VideoPage($artistSlug: String!, $videoSlug: String!) {
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

export async function getVideoPageData(variables: { artistSlug: string; videoSlug: string }) {
  const { data } = await getClient().query({
    query,
    variables,
  });

  return { page: data?.page?.items[0] };
}
