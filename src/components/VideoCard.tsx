import { Box } from "@chakra-ui/react";

interface VideoCardProps {
  title?: string;
  artistName?: string;
  thumbnailSrc?: string;
  color?: string;
}

export function VideoCard(props: VideoCardProps) {
  const { title, artistName, thumbnailSrc, color } = props;

  return (
    <Box>
      <Box>{title}</Box>
      <Box>{artistName}</Box>
    </Box>
  );
}
