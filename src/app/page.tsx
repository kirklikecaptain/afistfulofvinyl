import type { Metadata } from "next";

import { BrandHero, CardLink, CardSection, Page } from "~/components";
import { getLatestVideoCards } from "~/graphql/queries/getVideoCards";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description: "Sessions and Interviews with the best in underground music",
};

export default async function HomePage() {
  const videoCards = await getLatestVideoCards();

  return (
    <Page>
      <BrandHero />
      <CardSection
        title="Latest Videos"
        cards={videoCards.map((video) => (
          <CardLink
            key={video?.title}
            href={`/artists/${video?.artist?.slug}/${video?.slug}`}
            image={video?.thumbnail?.url}
            title={video?.title || ""}
            subtitle={video?.artist?.name}
            accentColor={video?.artist?.accentColor}
          />
        ))}
      />
    </Page>
  );
}
