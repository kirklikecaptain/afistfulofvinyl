import type { Metadata } from "next";

import { AFoVHero, CardLink, CardSection, Page } from "~/components";
import { getLatestVideos } from "~/libs/contentful";
import { resolveVideoPagePath } from "~/utils/paths";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description: "Sessions and Interviews with the best in underground music",
};

export default async function HomePage() {
  const videos = await getLatestVideos();

  return (
    <Page>
      <AFoVHero />
      <CardSection
        title="Latest Videos"
        cards={videos.map((video) => (
          <CardLink
            key={video.sys.id}
            href={resolveVideoPagePath(video)}
            image={video.fields.thumbnail?.fields.file?.url}
            title={video.fields.title}
            subtitle={video.fields.artist?.fields.name}
            accentColor={video.fields.artist?.fields.accentColor}
          />
        ))}
      />
    </Page>
  );
}
