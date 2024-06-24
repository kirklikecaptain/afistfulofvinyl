import { Metadata } from "next";

import { Main, Hero } from "~/components";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about our team and mission at A Fistful of Vinyl",
};

export default function AboutPage() {
  return (
    <Main>
      <Hero heading="About" />
    </Main>
  );
}
