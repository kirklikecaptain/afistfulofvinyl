import { rscQuery, graphql, assertCollectionItems } from '~/contentful';

export const HomePageDocument = graphql(`
  query HomePage {
    videoCollection(order: uploadDate_DESC, limit: 12) {
      items {
        ...VideoCard
      }
    }
  }
`);

export async function getHomePageData() {
  const data = await rscQuery({
    document: HomePageDocument,
    variables: {},
    options: { revalidate: 60, tags: ['contentful', 'home-page'] },
  });

  return {
    recentVideos: assertCollectionItems(data.videoCollection?.items),
  };
}
