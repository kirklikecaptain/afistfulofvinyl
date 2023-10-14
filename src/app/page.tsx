import { Link } from "~/components/Link";
import { getHomePageContent } from "~/api/queries";
import { Heading } from "~/libs/chakra-ui/react";

export async function generateMetadata() {
  const { meta } = await getHomePageContent();

  return {
    title: meta?.metaTitle,
    description: meta?.metaDescription,
  };
}

export default async function HomePage() {
  const { recentVideos } = await getHomePageContent();

  return (
    <main>
      <Heading as="h1">A Fistful of Vinyl</Heading>
      <Heading size="md">Recent</Heading>
      {recentVideos?.items.map((video) => (
        <div key={video?.slug}>
          <Link href={`/artists/${video?.artist?.slug}/${video?.slug}`}>{video?.title}</Link>
        </div>
      ))}
    </main>
  );
}
