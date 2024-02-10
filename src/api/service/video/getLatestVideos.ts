import contentfulClient from "~/api/config/contentfulClient";
import type { TypeVideoSkeleton } from "~/api/types/generated";

interface Options {
  preview: boolean;
  limit?: number;
}

export async function getLatestVideos({ preview, limit = 12 }: Options) {
  const client = contentfulClient({ preview });
  const entries =
    await client.withoutUnresolvableLinks.getEntries<TypeVideoSkeleton>({
      content_type: "video",
      order: ["-fields.uploadDate"],
      include: 2,
      limit,
    });

  return entries.items;
}
