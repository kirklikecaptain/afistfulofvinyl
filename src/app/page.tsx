import { getHomePageData } from '~/queries/getHomePageData';
import { CardSection } from '~/ui/components/CardSection';
import { VideoCard } from '~/ui/components/VideoCard';
import { AFoVHero } from '~/ui/features/AFoVHero';
import { Page } from '~/ui/layouts/Page';

export default async function HomePage() {
  const { recentVideos } = await getHomePageData();

  return (
    <Page>
      <AFoVHero />
      <CardSection>
        <CardSection.Title>Recent Videos</CardSection.Title>
        <CardSection.Grid>
          {recentVideos.map((video) => (
            <VideoCard key={video?._id} fragment={video} />
          ))}
        </CardSection.Grid>
      </CardSection>
    </Page>
  );
}
