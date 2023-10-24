import { getClient } from "~/libs/apollo/client.rsc";
import { gql } from "./graphql";

export async function getHomePageData() {
  const query = gql(/* GraphQL */ `
    query homePage {
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
          artist {
            name
            slug
          }
        }
      }
    }
  `);

  const { data } = await getClient().query({
    query,
  });

  return { page: data?.page?.items[0], recentVideos: data?.recentVideos?.items };
}
