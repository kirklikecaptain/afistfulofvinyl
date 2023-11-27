import { get, graphql, type VideoPageQueryVariables } from "~/api";

import { removeNulls } from "../client/utils";

const VideoPageData = graphql(/* GraphQL */ `
  query VideoPage($artistSlug: String!, $videoSlug: String!) {
    video: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {
      items {
        ...AllVideoFields
      }
    }
    moreVideos: videoCollection(
      where: { slug_not: $videoSlug, artist: { slug: $artistSlug } }
      order: uploadDate_DESC
    ) {
      items {
        ...VideoCardFields
      }
    }
  }
`);

export async function getVideoPageData(variables: VideoPageQueryVariables) {
  const data = await get(VideoPageData, variables);
  const page = data.video?.items[0];
  const moreVideos = removeNulls(data.moreVideos?.items);

  return { page, moreVideos };
}
