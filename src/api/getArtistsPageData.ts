import { getClient } from "~/libs/apollo/client.rsc";
import { gql } from "~/libs/apollo/graphql";

const query = gql(/* GraphQL */ `
  query ArtistsPage {
    page: pageCollection(where: { slug: "artists" }) {
      items {
        metaTitle
        metaDescription
      }
    }
    artists: artistCollection(order: name_ASC, limit: 200) {
      items {
        name
        slug
        accentColor
        pagePath @client
      }
    }
  }
`);

export async function getArtistsPageData() {
  const { data } = await getClient().query({
    query,
  });

  return { page: data?.page?.items[0], artists: data?.artists?.items };
}
