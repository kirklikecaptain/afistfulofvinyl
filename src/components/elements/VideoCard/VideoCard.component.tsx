import { Box, Title, Text, AspectRatio } from '@mantine/core';

import { fragmentToProps, type PropsOrFragment, type VideoCardFragment } from '~/contentful';
import { Image } from '../Image';

import { getVideoCardProps } from './VideoCard.utils';

export type VideoCardProps = {
  title: string;
  subtitle?: string;
  thumbnailSrc: string;
  href: string;
  artist: string;
  accentColor?: string;
  artistImageSrc?: string;
};

export function VideoCard(props: PropsOrFragment<VideoCardProps, VideoCardFragment>) {
  const { title, subtitle, thumbnailSrc } = fragmentToProps(props, getVideoCardProps);

  return (
    <AspectRatio ratio={16 / 9}>
      <Box bg="dark.9" pos="relative">
        <Image src={thumbnailSrc} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" />
        <Box pos="absolute" bottom={0} p="md" bg="rgba(0, 0, 0, 0.6)" w="100%">
          <Title component="h3" size="md">
            {title}
          </Title>
          {subtitle && <Text>{subtitle}</Text>}
        </Box>
      </Box>
    </AspectRatio>
  );
}
