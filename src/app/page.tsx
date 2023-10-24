import { Link } from "~/components/Link";

import { Heading } from "~/libs/chakra-ui/react";
import { Layout } from "~/components/Layout/Layout";
import { BrandHero } from "~/components/BrandHero";
import { getHomePageData } from "~/api/getHomePageData";

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
      <Heading size="md">Recent</Heading>
      {recentVideos?.map((video) => (
        <div key={video?.slug}>
          <Link href={`/artists/${video?.artist?.slug}/${video?.slug}`}>{video?.title}</Link>
        </div>
      ))}
    </Layout>
  );
}
