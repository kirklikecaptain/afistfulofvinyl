"use client";

import { Card, Title } from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";

import { breakpoints } from "~/styles/theme";

import { Image } from "../Image/Image";
import { LinkBlock, type LinkBlockProps } from "../LinkBlock/LinkBlock";

export interface VideoCardLinkProps<T extends string = string> extends LinkBlockProps<T> {
  title: string;
  artistName: string;
  artistColor: string;
  thumbnailSrc: string;
}

export function VideoCardLink<T extends string>(props: VideoCardLinkProps<T>) {
  const { title, artistName, artistColor, thumbnailSrc, href } = props;
  const scheme = generateColors(artistColor);

  return (
    <Card shadow="md" renderRoot={(rootProps) => <LinkBlock href={href} {...rootProps} />}>
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
    </Card>
  );
}
