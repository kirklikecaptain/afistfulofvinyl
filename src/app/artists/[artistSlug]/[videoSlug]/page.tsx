import { get, AllVideoSlugsDocument, VideoPageDocument } from "~/api";
import { Heading } from "~/components/chakra-ui/react";
import { Layout } from "~/components/Layout";

async function getAllVideoSlugs() {
  const { data } = await get(AllVideoSlugsDocument);

  return data.videos?.items || [];
}

export async function generateStaticParams() {
  const videos = await getAllVideoSlugs();
  const params = videos.map((video) => ({
    artistSlug: video?.artist?.slug,
    videoSlug: video?.slug,
  }));

  return params;
}

interface VideoPageParams {
  artistSlug: string;
  videoSlug: string;
}

async function getVideoPageData({ artistSlug, videoSlug }: VideoPageParams) {
  const { data } = await get(VideoPageDocument, { artistSlug, videoSlug });
  const page = data.page?.items[0] || {};
  const moreVideos = data.moreVideos?.items || [];

  return { page, moreVideos };
}

interface VideoPageProps {
  params: VideoPageParams;
}

export async function generateMetadata({ params }: VideoPageProps) {
  const { artistSlug, videoSlug } = params;

  const { page } = await getVideoPageData({
    artistSlug,
    videoSlug,
  });

  const title = page?.title;

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
