import { rscQuery, graphql, assertCollectionItems } from '~/contentful';

export const ArtistPageDocument = graphql(`
  query ArtistPage($slug: String!) {
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

export async function getArtistPageData(slug: string) {
  const data = await rscQuery({
    document: ArtistPageDocument,
    variables: { slug },
    options: { revalidate: 60, tags: ['contentful', `artist-${slug}`] },
  });

  const artist = data?.artistCollection?.items[0] ?? null;
  const videos = assertCollectionItems(data?.videoCollection?.items);

  return {
    artist,
    videos,
  };
}
