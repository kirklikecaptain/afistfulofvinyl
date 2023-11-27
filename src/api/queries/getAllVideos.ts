import { get, graphql } from "~/api";

import { removeNulls } from "./../client/utils";

const AllVideosData = graphql(/* GraphQL */ `
  query AllVideos {
    videos: videoCollection(limit: 500, order: uploadDate_DESC) {
      items {
        ...VideoCardFields
      }
    }
  }
`);

export async function getAllVideos() {
  const data = await get(AllVideosData);

  return removeNulls(data.videos?.items);
}
