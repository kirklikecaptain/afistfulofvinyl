import { AFoVHero, CardSection, Page, VideoCard } from '~/components';
import { getHomePageData } from '~/queries';

export default async function HomePage() {
  const data = await getHomePageData();

  return (
    <Page>
      <AFoVHero />
      <CardSection>
        <CardSection.Title>Recent Videos</CardSection.Title>
        <CardSection.Grid>
          {data.recentVideos.map((video) => (
            <VideoCard key={video?._id} fragment={video} />
          ))}
        </CardSection.Grid>
      </CardSection>
    </Page>
  );
}
