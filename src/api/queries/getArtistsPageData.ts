import { getClient } from "~/libs/apollo/client.rsc";
import { ArtistsPageDocument } from "../__generated__/graphql";

export async function getArtistsPageData() {
  const { data } = await getClient().query({
    query: ArtistsPageDocument,
  });

  return { page: data?.page?.items[0], artists: data?.artists?.items };
}
