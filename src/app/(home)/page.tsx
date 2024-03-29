import { Metadata } from "next";

import { AFoVHero, CardList, Page, VideoCard } from "~/components";

import { getHomePageData } from "./data";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description:
    "Live sessions and interviews with independent and DIY artists from all music genres",
};

export default async function HomePage() {
  const { latestVideoVideoCards } = await getHomePageData();

  return (
    <Page>
      <AFoVHero />
      <CardList title="Latest Videos">
        {latestVideoVideoCards.map((props) => (
          <VideoCard key={props.href} {...props} />
        ))}
      </CardList>
    </Page>
  );
}
