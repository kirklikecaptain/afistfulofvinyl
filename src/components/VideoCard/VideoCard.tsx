"use client";

import { Box, Title } from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";

import { breakpoints } from "~/styles/theme";

import { Image } from "../Image";
import { LinkCard, LinkCardProps } from "../LinkCard";

export type VideoCardProps<T extends string> = LinkCardProps<T> & {
  title: string;
  artistName: string;
  artistColor: string;
  thumbnailSrc: string;
};

export function VideoCard<T extends string>(props: VideoCardProps<T>) {
  const { title, artistName, artistColor, thumbnailSrc, href } = props;
  const scheme = generateColors(artistColor);

  return (
    <LinkCard href={href}>
      <Box mb={4}>
        <Image
          src={thumbnailSrc}
          alt={title}
          aspectRatio="16:9"
          sizes={`100vw, (min-width: ${breakpoints.sm}) 50vw, (min-width: ${breakpoints.lg}) 33vw`}
          priority
        />
      </Box>
      <Title order={3}>{title}</Title>
      <Title order={4} c={scheme[5]}>
        {artistName}
      </Title>
    </LinkCard>
  );
}
