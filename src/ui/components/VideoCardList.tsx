import { Box, Heading } from "~/ui/chakra/react";
import { Image } from "./Image";
import { FragmentType, VideoCardFragmentDoc, getFragmentData } from "~/api";

type VideoCardFragment = FragmentType<typeof VideoCardFragmentDoc> | null;

interface VideoCardProps {
  video: VideoCardFragment;
}

function VideoCard({ video }: VideoCardProps) {
  if (!video) {
    return null;
  }

  const { artist, thumbnail, title, subtitle } = getFragmentData(VideoCardFragmentDoc, video);

  return (
    <Box>
      <Box height={10} bg={artist?.accentColor || "red"} />
      {thumbnail?.url && <Image src={thumbnail?.url} width="600" height="400" alt="" />}
      <Box>{title}</Box>
      <Box>{subtitle}</Box>
      <Box>{artist?.name}</Box>
    </Box>
  );
}

interface VideoCardListProps {
  heading: string;
  videos: VideoCardFragment[] | null | undefined;
}

export function VideoCardList({ heading, videos }: VideoCardListProps) {
  return (
    <Box as="section">
      <Heading>{heading}</Heading>
      <Box>{videos?.map((video, i) => <VideoCard key={`card_${i}`} video={video} />)}</Box>
    </Box>
  );
}
