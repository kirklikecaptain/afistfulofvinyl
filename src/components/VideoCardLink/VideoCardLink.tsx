"use client";

import NextLink from "next/link";
import { Card, Title } from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";

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
    <Card renderRoot={(rootProps) => <NextLink href={href} {...rootProps} />} shadow="md">
      <Image src={thumbnailSrc} alt={title} width={400} height={300} />
      <Title order={3}>{title}</Title>
      <Title order={4}>{artistName}</Title>
    </Card>
  );
}
