import { draftMode } from "next/headers";

import { getLatestVideos } from "~/api/contentful/queries";

async function getHomePageData(preview: boolean) {
  return await getLatestVideos({ preview });
}

export default async function HomePage() {
  const data = await getHomePageData(draftMode().isEnabled);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Latest Videos</h2>
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
