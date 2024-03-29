import { ContentfulClientOptions, contentfulClient } from "~/libs/contentful/client";
import { TypeVideoSkeleton } from "~/libs/contentful/types";

export async function getAllVideos(clientOptions?: ContentfulClientOptions) {
  const contentful = contentfulClient(clientOptions);
  const entries = await contentful.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    limit: 1000,
    include: 2,
  });

  return entries.items;
}
