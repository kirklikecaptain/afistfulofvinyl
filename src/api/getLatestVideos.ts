import { ContentfulClientOptions, contentfulClient } from "~/libs/contentful/client";
import { TypeVideoSkeleton } from "~/libs/contentful/types";

export async function getLatestVideos(clientOptions?: ContentfulClientOptions) {
  const contentful = contentfulClient(clientOptions);
  const entries = await contentful.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    order: ["-fields.uploadDate"],
    include: 2,
    limit: 12,
  });

  return entries.items;
}
