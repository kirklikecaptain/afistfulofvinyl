import { Text, Box, Heading, LinkBox, AspectRatio, Flex } from "~/ui/chakra/react";
import type { Video, Artist, Asset } from "~/api";

import { Image } from "./Image";
import { LinkOverlay } from "./Link";

interface VideoCardProps {
  title: Video["title"];
  subtitle: Video["subtitle"];
  artistName: Artist["name"];
  artistColor: Artist["accentColor"];
  thumbnailUrl: Asset["url"];
  pagePath: Artist["pagePath"];
}

export function VideoCard(props: VideoCardProps) {
  const { title, subtitle, thumbnailUrl, artistName, artistColor, pagePath } = props;

  const accentColor = artistColor || "red";

  return (
    <Box
      position="relative"
      role="group"
      borderWidth={1}
      borderColor={accentColor}
      bg={accentColor}
    >
      <LinkBox>
        <AspectRatio ratio={16 / 9}>
          <Image src={thumbnailUrl!} width="600" height="400" alt="" />
        </AspectRatio>
        <Box
          pointerEvents="none"
          position="absolute"
          inset={0}
          mixBlendMode="color"
          bg={accentColor}
          opacity={1}
          transition="opacity 0.2s"
          _groupHover={{ opacity: 0 }}
        />
        <Flex flexDirection="column" justify="end" padding={4} position="absolute" inset={0}>
          <LinkOverlay href={pagePath}>
            <Heading as="h3" size="lg">
              {title} {subtitle && <Text as="span">[{subtitle}]</Text>}
            </Heading>
            {subtitle && <Box></Box>}
            <Text>{artistName}</Text>
          </LinkOverlay>
        </Flex>
      </LinkBox>
    </Box>
  );
}
