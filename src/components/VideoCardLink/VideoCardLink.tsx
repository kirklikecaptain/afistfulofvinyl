"use client";

import { Title } from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";

import { breakpoints } from "~/theme";

import { Image } from "../Image";
import { LinkCard, LinkCardProps } from "../LinkCard";

export interface VideoCardLinkProps<T extends string> extends LinkCardProps<T> {
  title: string;
  artistName: string;
  artistColor: string;
  thumbnailSrc: string;
}

export function VideoCardLink<T extends string>(props: VideoCardLinkProps<T>) {
  const { title, artistName, artistColor, thumbnailSrc, href } = props;
  const scheme = generateColors(artistColor);

  return (
    <LinkCard href={href}>
      <Image
        src={thumbnailSrc}
        alt={title}
        aspectRatio="16:9"
        sizes={`100vw, (min-width: ${breakpoints.sm}) 50vw, (min-width: ${breakpoints.lg}) 33vw`}
        priority
      />
      <Title order={3}>{title}</Title>
      <Title order={4} c={scheme[5]}>
        {artistName}
      </Title>
    </LinkCard>
  );
}
