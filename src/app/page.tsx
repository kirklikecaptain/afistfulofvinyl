import type { Metadata } from "next";

import { BrandHero, CardLink, CardSection, Page } from "~/components";
import { getVideoPagePath } from "~/utils/paths";

import { fetchHomePageData } from "./page.data";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description: "Sessions and Interviews with the best in underground music",
};

export default async function HomePage() {
  const { recentVideos } = await fetchHomePageData();

  return (
    <Page>
      <BrandHero />
      <CardSection
        title="Latest Videos"
        cards={recentVideos.map((video) => (
          <CardLink
            key={video.title}
            href={getVideoPagePath(video.artist?.slug, video.slug)}
            image={video.thumbnail?.url}
            title={video.title}
            subtitle={video.artist?.name}
            accentColor={video.artist?.accentColor}
          />
        ))}
      />
    </Page>
  );
}
