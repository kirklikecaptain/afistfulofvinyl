import { Page, VideoCard, AFoVHero, CardList } from '~/components';

import { getHomePageData } from './page.data';

export default async function HomePage() {
  const { recentVideos } = await getHomePageData();

  return (
    <Page>
      <AFoVHero />
      <CardList>
        <CardList.Title order={2} mb="md">
          Recent Videos
        </CardList.Title>
        <CardList.Content spacing="lg">
          {recentVideos.map((video) => (
            <VideoCard key={video._id} _fragment={video} />
          ))}
        </CardList.Content>
      </CardList>
    </Page>
  );
}
