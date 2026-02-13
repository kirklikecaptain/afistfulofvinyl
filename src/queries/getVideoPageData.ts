import { serverQuery, graphql, assertCollectionItems } from '~/lib/contentful';

export const VideoPageDocument = graphql(`
  query VideoPage($artistSlug: String!, $videoSlug: String!) {
    main: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {
      items {
        videoUrl
        ...VideoCard
      }
    }
    more: videoCollection(
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
  const { main, more } = await serverQuery({
    document: VideoPageDocument,
    variables: { artistSlug, videoSlug },
    options: { revalidate: 60, tags: [`artist-${artistSlug}-${videoSlug}`] },
  });

  const video = main?.items[0] ?? null;
  const moreVideos = assertCollectionItems(more?.items);

  return {
    video,
    moreVideos,
  };
}
