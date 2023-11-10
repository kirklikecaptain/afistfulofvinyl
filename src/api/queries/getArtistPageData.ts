import { getClient } from "~/libs/apollo/client.rsc";
import { ArtistPageDocument } from "../__generated__/graphql";

export async function getArtistPageData(variables: { artistSlug: string }) {
  const { data } = await getClient().query({
    query: ArtistPageDocument,
    variables,
  });

  return { page: data?.page?.items[0], videos: data?.videos?.items };
}
