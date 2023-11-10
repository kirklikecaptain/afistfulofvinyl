import { getHomePageData } from "~/api/queries/getHomePageData";
import { BrandHero, Layout, VideoCard, VideoCardList } from "~/components";

export async function generateMetadata() {
  const { page } = await getHomePageData();

  return {
    title: page?.metaTitle,
  };
}

export default async function HomePage() {
  const { recentVideos = [] } = await getHomePageData();

  return (
    <Layout>
      <BrandHero />
      <VideoCardList heading="Recent">
        {recentVideos.length > 0 &&
          recentVideos.map((v) => (
            <VideoCard
              key={v?.sys.id}
              title={v?.title}
              subtitle={v?.subtitle}
              thumbnailUrl={v?.thumbnail?.url}
              artistName={v?.artist?.name}
              color={v?.artist?.accentColor}
              linkTo={v?.pagePath!}
            />
          ))}
      </VideoCardList>
    </Layout>
  );
}
