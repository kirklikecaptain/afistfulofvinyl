import { Image } from "./Image";
import { Box } from "~/libs/chakra-ui/react";
import { Artist, Asset, Video } from "~/api/__generated__/graphql";

interface VideoCardProps {
  title: Video["title"];
  subtitle: Video["subtitle"];
  artistName: Artist["name"];
  thumbnailUrl: Asset["url"];
  color?: Artist["accentColor"];
  linkTo: string;
}

export function VideoCard(props: VideoCardProps) {
  const { title, subtitle, artistName, thumbnailUrl, color } = props;

  return (
    <Box>
      <Box height={10} bg={color || "red"} />
      {thumbnailUrl && <Image src={thumbnailUrl} width="600" height="400" alt="" />}
      <Box>{title}</Box>
      <Box>{subtitle}</Box>
      <Box>{artistName}</Box>
    </Box>
  );
}
