import { Metadata } from "next";

import { Main, Hero } from "~/components";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with A Fistful of Vinyl",
};

export default function ContactPage() {
  return (
    <Main>
      <Hero heading="Contact" />
    </Main>
  );
}
