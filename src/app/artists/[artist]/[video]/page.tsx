import { getAllVideoSlugs, getAllVideosForArtist, getVideoPageContent } from "~/api/queries";
import { Heading } from "~/libs/chakra-ui/react";

type Props = {
  params: {
    artist: string;
    video: string;
  };
};

export async function generateStaticParams() {
  return await getAllVideoSlugs();
}

export async function generateMetadata({ params }: Props) {
  const video = await getVideoPageContent(params.artist, params.video);

  return {
    title: video?.title,
  };
}

export default async function VideoPage({ params }: Props) {
  const content = await getVideoPageContent(params.artist, params.video);

  return (
    <main>
      <Heading as="h1">{content?.title}</Heading>
      <Heading size="md">{content?.artist?.name}</Heading>
    </main>
  );
}
