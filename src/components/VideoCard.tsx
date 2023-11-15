import { FragmentType, VideoCardFragmentDoc, getFragmentData } from "~/api";
import { Image } from "./Image";
import { Box } from "~/components/chakra-ui/react";

interface VideoCardProps {
  fragment: FragmentType<typeof VideoCardFragmentDoc> | null;
}

export function VideoCard({ fragment }: VideoCardProps) {
  if (!fragment) {
    return null;
  }

  const { artist, thumbnail, title, subtitle } = getFragmentData(VideoCardFragmentDoc, fragment);

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
