import { Hero, Page } from "~/components";

export type VideoCategoryPageProps = {
  params: {
    category: string;
  };
};

export default function VideoCategoryPage({ params }: VideoCategoryPageProps) {
  return (
    <Page>
      <Hero heading={params.category} />
    </Page>
  );
}
