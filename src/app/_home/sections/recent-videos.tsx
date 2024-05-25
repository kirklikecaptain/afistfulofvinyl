import { Heading } from "@radix-ui/themes";

import { getLatestVideos } from "~/lib/contentful/getLatestVideos";

export async function RecentVideos() {
  const videos = await getLatestVideos();

  return (
    <section>
      <Heading as="h2">Recent Videos</Heading>
      <div>
        <ul>
          {videos.map((video) => (
            <li key={video.sys.id}>{video.fields.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
