import { serverQuery, graphql, assertCollectionItems } from '~/lib/contentful';

export const ArtistListPageDocument = graphql(`
  query ArtistListPage {
    artistCollection(order: name_ASC, limit: 500) {
      items {
        ...ArtistCard
      }
    }
  }
`);

export async function getArtistListPageData() {
  const { artistCollection } = await serverQuery({
    document: ArtistListPageDocument,
    variables: {},
    options: { revalidate: 60, tags: ['artists-list-page'] },
  });

  const artists = assertCollectionItems(artistCollection?.items);

  return {
    artists,
  };
}
