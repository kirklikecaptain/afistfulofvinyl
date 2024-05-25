import { Heading } from "@radix-ui/themes";

import { Image } from "~/components/image";
import { getLatestVideos } from "~/lib/contentful/getLatestVideos";

export async function RecentVideos() {
  const videos = await getLatestVideos();

  return (
    <section>
      <Heading as="h2">Recent Videos</Heading>
      <div>
        <ul>
          {videos.map((video) => (
            <li key={video.sys.id}>
              <Image
                priority
                src={video.fields.thumbnail?.fields.file?.url || ""}
                alt=""
                height={video.fields.thumbnail?.fields.file?.details?.image?.height}
                width={video.fields.thumbnail?.fields.file?.details?.image?.width}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
