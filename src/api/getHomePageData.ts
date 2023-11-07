import { getClient } from "~/libs/apollo/client.rsc";
import { gql } from "~/libs/apollo/graphql";

const query = gql(/* GraphQL */ `
  query HomePage {
    page: pageCollection(where: { slug: "home" }) {
      items {
        metaTitle
        metaDescription
      }
    }
    recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {
      items {
        title
        slug
        pagePath @client
        artist {
          name
          slug
        }
      }
    }
  }
`);

export async function getHomePageData() {
  const { data } = await getClient().query({
    query,
  });

  return { page: data?.page?.items[0], recentVideos: data?.recentVideos?.items };
}
