import type { Metadata } from "next";

import { Page } from "~/components/page";

import { AFoVHero } from "./sections/afov-hero";
import { RecentVideos } from "./sections/recent-videos";

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
