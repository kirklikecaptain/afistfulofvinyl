import { draftMode } from "next/headers";
import { getLatestVideos } from "~/api/service/video/getLatestVideos";
import { parseVideoCardData } from "~/api/service/video/utils";
import { GridSection } from "~/components/GridSection";
import { VideoCard } from "~/components/VideoCard";

async function getHomePageData(preview: boolean) {
  const recentVideos = await getLatestVideos({ preview });
  const recentVideoCards = recentVideos.map(parseVideoCardData);

  return {
    recentVideoCards,
  };
}

export default async function HomePage() {
  const { recentVideoCards } = await getHomePageData(draftMode().isEnabled);

  return (
    <main>
      <h1>Home</h1>
      <GridSection title="Featured Videos">
        {recentVideoCards.map(({ id, ...videoCard }) => (
          <VideoCard key={id} {...videoCard} />
        ))}
      </GridSection>
    </main>
  );
}
