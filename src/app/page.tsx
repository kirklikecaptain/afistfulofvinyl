import type { Metadata } from "next";

import { Page } from "~/components";

import { AFoVHero } from "./_sections/afov-hero";
import { RecentVideos } from "./_sections/recent-videos";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description: "Sessions and Interviews with the best in underground music",
};

export default function HomePage() {
  return (
    <Page>
      <AFoVHero />
      <RecentVideos />
    </Page>
  );
}
