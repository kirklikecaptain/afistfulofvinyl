import { rscQuery, graphql, assertCollectionItems } from '~/contentful';

export const AllArtistsPageDocument = graphql(`
  query AllArtistsPage {
    artistCollection(order: name_ASC, limit: 100) {
      items {
        ...ArtistCard
      }
    }
  }
`);

export async function getAllArtistsPageData() {
  const data = await rscQuery({
    document: AllArtistsPageDocument,
    variables: {},
    options: { revalidate: 60, tags: ['contentful', 'all-artists-page'] },
  });

  const artists = assertCollectionItems(data.artistCollection?.items);

  return {
    artists,
  };
}
