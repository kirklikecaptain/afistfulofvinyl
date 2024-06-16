import { Metadata } from "next";
import { Container, Grid, Section } from "@radix-ui/themes";

import { Page } from "~/components";
import { getVideoBySlugs } from "~/libs/contentful";

import { FeaturedVideo } from "./components/featured-video";
import { RelatedVideos } from "./components/related-videos";

export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const video = await getVideoBySlugs({ video: params.video, artist: params.artist });

  return {
    title: `${video.fields.title} | ${params.artist}`,
    description: video.fields.shortDescription,
  };
}

export type VideoPageProps = {
  params: {
    artist: string;
    video: string;
  };
};

export default async function VideoPage({ params }: VideoPageProps) {
  return (
    <Page>
      <Section p="4">
        <Container>
          <Grid columns={{ sm: "1fr 250px", md: "1fr 320px" }} gap="4" align="start">
            <FeaturedVideo videoSlug={params.video} artistSlug={params.artist} />
            <RelatedVideos artistSlug={params.artist} />
          </Grid>
        </Container>
      </Section>
    </Page>
  );
}
