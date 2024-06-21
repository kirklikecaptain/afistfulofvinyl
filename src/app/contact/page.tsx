import { Metadata } from "next";

import { Hero, Page } from "~/components";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with A Fistful of Vinyl",
};

export default function ContactPage() {
  return (
    <Page>
      <Hero heading="Contact" />
    </Page>
  );
}
