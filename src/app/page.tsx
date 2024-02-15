import { Box } from "@mantine/core";
import { draftMode } from "next/headers";

import { NextImage } from "~/components/NextImage/NextImage";
import { getLatestVideos } from "~/api/contentful/queries";
import { GridSection } from "~/sections/GridSection";
import { BrandHero } from "~/sections/BrandHero";

async function getHomePageData(preview: boolean) {
  return await getLatestVideos({ preview });
}

export default async function HomePage() {
  const data = await getHomePageData(draftMode().isEnabled);

  return (
    <Box>
      <BrandHero />
      <GridSection title="Latest Videos">
        {data.map((video) => (
          <div key={video.sys.id}>
            <h3>
              {video.fields.title} - {video.fields.artist?.fields.name}
            </h3>
            <NextImage src={video.fields.thumbnail} sizes="300px" />
          </div>
        ))}
      </GridSection>
    </Box>
  );
}
