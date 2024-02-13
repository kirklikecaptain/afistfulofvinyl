import { Title } from "@mantine/core";
import { draftMode } from "next/headers";

import { getLatestVideos } from "~/api/contentful/queries";

async function getHomePageData(preview: boolean) {
  return await getLatestVideos({ preview });
}

export default async function HomePage() {
  const data = await getHomePageData(draftMode().isEnabled);

  return (
    <div>
      <Title>Home Page</Title>
      <Title order={2}>Latest Videos</Title>
      <ul>
        {data.map((video) => (
          <li key={video.sys.id}>
            <h3>
              {video.fields.title} - {video.fields.artist?.fields.name}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
