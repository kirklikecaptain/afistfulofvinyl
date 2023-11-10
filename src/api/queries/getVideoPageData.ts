import { getClient } from "~/libs/apollo/client.rsc";
import { VideoPageDocument } from "../__generated__/graphql";

export async function getVideoPageData(variables: { artistSlug: string; videoSlug: string }) {
  const { data } = await getClient().query({
    query: VideoPageDocument,
    variables,
  });

  return { page: data?.page?.items[0] };
}
