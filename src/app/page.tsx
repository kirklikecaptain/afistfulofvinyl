import { get, HomePageDocument } from "~/api";
import { BrandHero, Layout, VideoCard, VideoCardList } from "~/components";

async function getHomePageData() {
  const { data } = await get(HomePageDocument);

  const page = data.page?.items[0] || {};
  const recentVideos = data.recentVideos?.items || [];

  return {
    page,
    recentVideos,
  };
}

export async function generateMetadata() {
  const { page } = await getHomePageData();

  return {
    title: page.metaTitle,
  };
}

export default async function HomePage() {
  const { recentVideos } = await getHomePageData();

  return (
    <Layout>
      <BrandHero />
      <VideoCardList heading="Recent">
        {recentVideos.map((fragment, i) => (
          <VideoCard key={`${fragment?.__typename}-${i}`} fragment={fragment} />
        ))}
      </VideoCardList>
    </Layout>
  );
}
