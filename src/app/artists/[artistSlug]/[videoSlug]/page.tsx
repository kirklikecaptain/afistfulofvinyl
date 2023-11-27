import { nullFilter } from "~/api";
import { getAllVideos } from "~/api/queries/getAllVideos";
import { getVideoPageData } from "~/api/queries/getVideoPageData";
import { Heading } from "~/ui/chakra/react";
import { Layout } from "~/ui/components/Layout";

export async function generateStaticParams() {
  const videos = await getAllVideos();
  const params = videos.filter(nullFilter).map((video) => ({
    artistSlug: video.artist?.slug,
    videoSlug: video.slug,
  }));

  return params;
}

interface VideoPageProps {
  params: {
    artistSlug: string;
    videoSlug: string;
  };
}

export async function generateMetadata({ params }: VideoPageProps) {
  const { artistSlug, videoSlug } = params;

  const { page } = await getVideoPageData({
    artistSlug,
    videoSlug,
  });

  return {
    title: page?.title,
  };
}

export default async function VideoPage({ params }: VideoPageProps) {
  const { artistSlug, videoSlug } = params;

  const { page } = await getVideoPageData({
    artistSlug,
    videoSlug,
  });

  return (
    <Layout>
      <Heading as="h1">{page?.title}</Heading>
      <Heading size="md">{page?.artist?.name}</Heading>
    </Layout>
  );
}
