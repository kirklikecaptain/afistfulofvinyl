import { getHomePageData } from "~/api/queries/getHomePageData";
import { BrandHero, Layout, VideoCardList } from "~/ui/components";

export async function generateMetadata() {
  const { page } = await getHomePageData();

  return {
    title: page?.metaTitle,
  };
}

export default async function HomePage() {
  const { recentVideos } = await getHomePageData();

  return (
    <Layout>
      <BrandHero />
      <VideoCardList heading="Recent" videos={recentVideos} />
    </Layout>
  );
}
