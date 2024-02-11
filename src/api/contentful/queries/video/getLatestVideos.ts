import { contentfulClient } from "~/api/contentful/config/client";
import type { TypeVideoSkeleton } from "~/api/contentful/types/generated";

interface Options {
  preview: boolean;
  limit?: number;
}

export async function getLatestVideos({ preview, limit }: Options) {
  const client = contentfulClient({ preview });
  const entries = await client.withoutUnresolvableLinks.getEntries<TypeVideoSkeleton>({
    content_type: "video",
    order: ["-fields.uploadDate"],
    include: 2,
    limit: limit ?? 12,
  });

  return entries.items;
}
