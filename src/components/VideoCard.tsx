"use client";

import {
  AspectRatio,
  Card,
  CardSection,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";

import { Link } from "./Link";

export interface VideoCardProps {
  pagePath: string;
  title: string;
  subtitle?: string;
  artistName?: string;
  artistAccentColor?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
}

export function VideoCard({
  pagePath,
  title,
  subtitle,
  artistName,
  artistAccentColor = "#4C6EF5",
  thumbnailSrc = "https://placehold.co/300x400",
  thumbnailAlt,
}: VideoCardProps) {
  const colors = generateColors(artistAccentColor);

  return (
    <Card component={Link} href={pagePath} underline="never">
      <CardSection>
        <AspectRatio ratio={16 / 9}>
          <Image src={thumbnailSrc} alt={thumbnailAlt} fit="cover" />
        </AspectRatio>
      </CardSection>
      <CardSection>
        <Title order={3} c={colors[6]}>
          {subtitle ? `${title} ${subtitle}` : title}
        </Title>
        <Text>{artistName}</Text>
      </CardSection>
    </Card>
  );
}
