import { get, graphql, type ArtistPageQueryVariables } from "~/api";

import { removeNulls } from "./../client/utils";

const ArtistPageData = graphql(/* GraphQL */ `
  query ArtistPage($artistSlug: String!) {
    artist: artistCollection(where: { slug: $artistSlug }) {
      items {
        ...AllArtistFields
      }
    }
    videos: videoCollection(where: { artist: { slug: $artistSlug } }) {
      items {
        ...VideoCardFields
      }
    }
  }
`);

export async function getArtistPageData(variables: ArtistPageQueryVariables) {
  const data = await get(ArtistPageData, variables);
  const artist = data.artist?.items[0];
  const videos = removeNulls(data.videos?.items);

  return {
    artist,
    videos,
  };
}
