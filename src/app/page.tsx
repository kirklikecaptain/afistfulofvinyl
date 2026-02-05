import { AFoVHero, CardSection, Page, VideoCard } from '~/components';

import { getHomePageData } from './page.data';

export default async function HomePage() {
  const { recentVideos } = await getHomePageData();

  return (
    <Page>
      <AFoVHero />
      <CardSection>
        <CardSection.Title>Recent Videos</CardSection.Title>
        <CardSection.Grid>
          {recentVideos.map((video) => (
            <VideoCard key={video._id} fragment={video} />
          ))}
        </CardSection.Grid>
      </CardSection>
    </Page>
  );
}
