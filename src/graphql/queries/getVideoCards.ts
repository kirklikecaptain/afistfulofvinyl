import { VideoCardQueryDocument, VideoOrder } from "../__generated__/graphql";

import { contentful } from "./client";

export async function getLatestVideoCards() {
  const data = await contentful.request(VideoCardQueryDocument, {
    limit: 12,
    order: VideoOrder.UploadDateDesc,
  });

  return data.videoCollection?.items ?? [];
}
