import { Metadata } from "next";

import { AFoVHero, CardList, Page, VideoCard, resolveVideoCardProps } from "~/components";

import { getHomePageData } from "./data";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description:
    "Live sessions and interviews with independent and DIY artists from all music genres",
};

export default async function HomePage() {
  const { latestVideos } = await getHomePageData();

  return (
    <Page>
      <AFoVHero />
      <CardList title="Latest Videos">
        {latestVideos.map((video) => {
          const videoCardProps = resolveVideoCardProps(video);
          return <VideoCard key={video.sys.id} {...videoCardProps} />;
        })}
      </CardList>
    </Page>
  );
}
