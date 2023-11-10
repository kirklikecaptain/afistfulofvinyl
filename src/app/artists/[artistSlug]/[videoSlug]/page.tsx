import { getVideoPageData } from "~/api/queries/getVideoPageData";
import { getAllVideos } from "~/api/queries/getAllVideos";
import { Heading } from "~/libs/chakra-ui/react";
import { Layout } from "~/components/Layout";

export async function generateStaticParams() {
  const { videos } = await getAllVideos();

  return videos?.map((video) => ({
    artistSlug: video?.artist?.slug,
    videoSlug: video?.slug,
  }));
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
