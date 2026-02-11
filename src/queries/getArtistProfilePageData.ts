import { serverQuery, graphql, assertCollectionItems } from '~/lib/contentful';

export const ArtistProfilePageDocument = graphql(`
  query ArtistProfilePage($slug: String!) {
    artistCollection(where: { slug: $slug }) {
      items {
        _id
        name
        slug
      }
    }
    videoCollection(where: { artist: { slug: $slug } }, order: title_ASC) {
      items {
        ...VideoCard
      }
    }
  }
`);

export async function getArtistProfilePageData(slug: string) {
  const { artistCollection, videoCollection } = await serverQuery({
    document: ArtistProfilePageDocument,
    variables: { slug },
    options: { revalidate: 60, tags: [`artist-${slug}`] },
  });

  const artist = artistCollection?.items[0] ?? null;
  const videos = assertCollectionItems(videoCollection?.items);

  return {
    artist,
    videos,
  };
}
