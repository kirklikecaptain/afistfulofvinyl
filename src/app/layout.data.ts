import type { AppSpotlightProps } from '~/components';
import { rscQuery, graphql, assertCollectionItems, toVideoPagePath } from '~/contentful';

export const RootLayoutDocument = graphql(`
  query RootLayout {
    artistCollection(order: name_ASC) {
      items {
        ...ArtistCard
      }
    }
    videoCollection(order: title_ASC, limit: 500) {
      items {
        ...VideoCard
      }
    }
  }
`);

export async function getRootLayoutData() {
  const { artistCollection, videoCollection } = await rscQuery({
    document: RootLayoutDocument,
    variables: {},
    options: { revalidate: 60, tags: ['root-layout-document'] },
  });

  const spotlightData: AppSpotlightProps = {
    artists: assertCollectionItems(artistCollection?.items).map((item) => ({
      title: item.name || '',
      href: `/artists/${item.slug}`,
      accentColor: item.accentColor || '#00ff00',
    })),
    videos: assertCollectionItems(videoCollection?.items).map((video) => ({
      title: `${video.artist?.name} / ${video.title}`,
      href: toVideoPagePath(video.artist?.slug, video.slug),
      accentColor: video.artist?.accentColor || '#00ff00',
      uploadDate: `${video.uploadDate}`,
    })),
  };

  return { spotlightData };
}
