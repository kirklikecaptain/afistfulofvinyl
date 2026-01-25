import { rscQuery, graphql, assertCollectionItems } from '~/contentful';

export const VideoPageDocument = graphql(`
  query VideoPage($artistSlug: String!, $videoSlug: String!) {
    video: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }, limit: 1) {
      items {
        ...VideoCard
      }
    }
    moreVideos: videoCollection(
      where: { slug_not: $videoSlug, artist: { slug: $artistSlug } }
      order: title_ASC
    ) {
      items {
        ...VideoCard
      }
    }
  }
`);

export async function getVideoPageData(artistSlug: string, videoSlug: string) {
  const data = await rscQuery({
    document: VideoPageDocument,
    variables: { artistSlug, videoSlug },
    options: { revalidate: 60, tags: ['contentful', `artist-${artistSlug}-${videoSlug}`] },
  });

  const video = data?.video?.items[0] ?? null;
  const moreVideos = assertCollectionItems(data?.moreVideos?.items);

  return {
    video,
    moreVideos,
  };
}
