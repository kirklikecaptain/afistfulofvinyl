import { Metadata } from "next";

import { Hero, Page } from "~/components";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about our team and mission at A Fistful of Vinyl",
};

export default function AboutPage() {
  return (
    <Page>
      <Hero heading="About" />
    </Page>
  );
}
