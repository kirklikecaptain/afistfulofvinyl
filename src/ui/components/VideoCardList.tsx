import { Box, Container, Grid, Heading, VStack } from "~/ui/chakra/react";
import { VideoCardFieldsFragment } from "~/api";

import { VideoCard } from "./VideoCard/VideoCard";

interface VideoCardListProps {
  heading: string;
  videos: VideoCardFieldsFragment[];
}

export function VideoCardList({ heading, videos }: VideoCardListProps) {
  return (
    <Box as="section">
      <Container maxWidth="container.xl">
        <Heading>{heading}</Heading>
        <Grid templateColumns="1fr 1fr 1fr" gap="8">
          {videos.map((video, i) => {
            return (
              <VideoCard
                key={`card_${i}`}
                title={video.title}
                subtitle={video.subtitle}
                thumbnailUrl={video.thumbnail?.url}
                artistName={video.artist?.name}
                artistColor={video.artist?.accentColor}
                pagePath={video.pagePath}
              />
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
