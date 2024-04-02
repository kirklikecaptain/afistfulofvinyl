import { Box, Title } from "@mantine/core";

import { breakpoints } from "~/styles/theme";
import { resolveArtistColors } from "~/utils/resolveArtistColors";
import { Image, LinkCard } from "~/components";

import { LinkCardProps } from "../LinkCard/LinkCard";

import classes from "./VideoCard.module.css";

export type VideoCardProps<T extends string> = LinkCardProps<T> & {
  title: string;
  artistName: string;
  artistColor: string;
  thumbnailSrc: string;
  hideArtistName?: boolean;
};

export function VideoCard<T extends string>(props: VideoCardProps<T>) {
  const { title, artistName, artistColor, thumbnailSrc, href, hideArtistName } = props;

  const colors = resolveArtistColors(artistColor);

  return (
    <LinkCard href={href} className={classes.card} style={colors.cssVars} p={0} bg="black">
      <Image
        src={thumbnailSrc}
        alt={title}
        aspectRatio="16:9"
        sizes={`100vw, (min-width: ${breakpoints.sm}) 50vw, (min-width: ${breakpoints.lg}) 33vw`}
        priority
      />
      <Box className={classes.overlay}>
        <Title order={3} lh="1.2">
          {title}
        </Title>
        {!hideArtistName && <Title order={4}>{artistName}</Title>}
      </Box>
    </LinkCard>
  );
}
