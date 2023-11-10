import { getClient } from "~/libs/apollo/client.rsc";
import { AllArtistsDocument } from "../__generated__/graphql";

export async function getAllArtists() {
  const { data } = await getClient().query({
    query: AllArtistsDocument,
  });

  return data?.artists?.items;
}
