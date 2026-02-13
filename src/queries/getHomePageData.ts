import { serverQuery, graphql, assertCollectionItems } from '~/lib/contentful';

export const HomePageDocument = graphql(`
  query HomePageData {
    videoCollection(order: uploadDate_DESC, limit: 12) {
      items {
        ...VideoCard
      }
    }
  }
`);

export async function getHomePageData() {
  const { videoCollection } = await serverQuery({
    document: HomePageDocument,
    variables: {},
    options: { revalidate: 60, tags: ['home-page-data'] },
  });

  const recentVideos = assertCollectionItems(videoCollection?.items);

  return {
    recentVideos,
  };
}
