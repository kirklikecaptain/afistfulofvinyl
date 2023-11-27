import { get, graphql } from "~/api";

import { removeNulls } from "../client/utils";

const ArtistsPageData = graphql(/* GraphQL */ `
  query ArtistsPage {
    page: pageCollection(where: { slug: "artists" }) {
      items {
        metaTitle
        metaDescription
      }
    }
    artists: artistCollection(order: name_ASC, limit: 500) {
      items {
        ...ArtistCardFields
      }
    }
  }
`);

export async function getArtistsPageData() {
  const data = await get(ArtistsPageData);
  const page = data.page?.items[0];
  const artists = removeNulls(data.artists?.items);

  return {
    page,
    artists,
  };
}
