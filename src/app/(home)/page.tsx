import { Metadata } from "next";

import { VideoCardLink } from "~/components";
import { AFoVHero, CardList } from "~/sections";
import { Page } from "~/templates";

import { getHomePageData } from "./page.data";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description:
    "Live sessions and interviews with independent and DIY artists from all music genres",
};

export default async function HomePage() {
  const { latestVideoVideoCardLinks } = await getHomePageData();

  return (
    <Page>
      <AFoVHero />
      <CardList title="Latest Videos">
        {latestVideoVideoCardLinks.map((video, i) => (
          <VideoCardLink key={i} {...video} />
        ))}
      </CardList>
    </Page>
  );
}
