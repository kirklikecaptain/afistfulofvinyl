import { get, graphql } from "~/api";

import { removeNulls } from "../client/utils";

export const HomePageData = graphql(/* GraphQL */ `
  query HomePage {
    page: pageCollection(where: { slug: "home" }) {
      items {
        metaTitle
        metaDescription
        slug
      }
    }
    recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {
      items {
        ...VideoCardFields
      }
    }
  }
`);

export async function getHomePageData() {
  const data = await get(HomePageData);

  const page = data.page?.items[0];
  const recentVideos = removeNulls(data.recentVideos?.items);

  return {
    page,
    recentVideos,
  };
}
