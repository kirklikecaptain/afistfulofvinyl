import { getVideoPageData } from "~/api/getVideoPageData";
import { Layout } from "~/components/Layout";
import { Heading } from "~/libs/chakra-ui/react";
import { getAllVideos } from "~/api/getAllVideos";

export async function generateStaticParams() {
  const { videos } = await getAllVideos();

  return videos?.map((video) => ({
    artistSlug: video?.artist?.slug,
    videoSlug: video?.slug,
  }));
}

type VideoPageProps = {
  params: {
    artistSlug: string;
    videoSlug: string;
  };
};

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
