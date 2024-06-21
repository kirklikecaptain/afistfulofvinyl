import { Metadata } from "next";

import { CardLink, CardSection, Hero, Page } from "~/components";
import { getVideoPagePath } from "~/utils/paths";

import { fetchAllVideosPageData } from "./page.data";

export const metadata: Metadata = {
  title: "Videos",
  description: "Sessions and interviews with the best in underground music",
};

export type SearchParams = {
  page?: string;
  category?: "interviews" | "songs" | "covers";
};

type PageProps = {
  searchParams: SearchParams;
};

export default async function AllVideosPage({ searchParams }: PageProps) {
  const { category, totalPages, currentPage, videos } = await fetchAllVideosPageData(searchParams);

  return (
    <Page>
      <Hero heading={category ? `${category}s` : "All Videos"} />
      <CardSection
        title="Latest"
        pagination={{ totalPages, currentPage }}
        cards={videos.map((video) => (
          <CardLink
            key={video.title}
            href={getVideoPagePath(video.artist?.slug, video.slug)}
            image={video.thumbnail?.url}
            title={video.title}
            subtitle={video.artist?.name}
            accentColor={video.artist?.accentColor}
          />
        ))}
      />
    </Page>
  );
}
