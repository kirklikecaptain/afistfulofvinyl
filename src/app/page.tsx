import type { Metadata } from "next";

import { BrandHero, CardLink, CardSection, Main } from "~/components";
import { getVideoPagePath } from "~/utils/paths";

import { fetchHomePageData } from "./page.data";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description: "Live sessions & interviews with the best in underground music",
};

export default async function HomePage() {
  const { recentVideos } = await fetchHomePageData();

  return (
    <Main>
      <BrandHero />
      <CardSection title="Latest">
        {recentVideos.map((video) => (
          <CardLink
            key={video.title}
            href={getVideoPagePath(video.artist?.slug, video.slug)}
            image={video.thumbnail?.url}
            title={video.title}
            subtitle={video.artist?.name}
            accentColor={video.artist?.accentColor}
          />
        ))}
      </CardSection>
    </Main>
  );
}
