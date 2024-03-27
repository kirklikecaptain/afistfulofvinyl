import { Metadata } from "next";

import { VideoCard } from "~/components";
import { AFoVHero, CardList } from "~/sections";
import { Page } from "~/templates";

import { getHomePageData } from "./page.data";

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
