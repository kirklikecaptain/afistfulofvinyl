import { contentful, graphql } from "~/graphql";
import { notEmpty } from "~/utils/filters";

const HomePageDocument = graphql(/* GraphQL */ `
  query HomePageQuery {
    recentVideos: videoCollection(limit: 12, order: uploadDate_DESC) {
      items {
        ...VideoCardLink
      }
    }
  }
`);

export async function fetchHomePageData() {
  const data = await contentful.request(HomePageDocument);

  return { recentVideos: data.recentVideos?.items.filter(notEmpty) ?? [] };
}
