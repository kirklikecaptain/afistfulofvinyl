import { getClient } from "~/libs/apollo/client.rsc";
import { AllVideosDocument } from "../__generated__/graphql";

export async function getAllVideos() {
  const { data } = await getClient().query({
    query: AllVideosDocument,
  });

  return { videos: data?.videos?.items };
}
