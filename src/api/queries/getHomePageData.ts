import { getClient } from "~/libs/apollo/client.rsc";
import { HomePageDocument } from "../__generated__/graphql";

export async function getHomePageData() {
  const { data } = await getClient().query({
    query: HomePageDocument,
  });

  return { page: data?.page?.items[0], recentVideos: data?.recentVideos?.items };
}
