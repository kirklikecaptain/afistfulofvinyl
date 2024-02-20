import { getLatestVideos } from "~/api/contentful/queries";
import { GridSection } from "~/components/GridSection/GridSection";
import { VideoCardLink } from "~/components";
import { resolveVideoCardLinkProps } from "~/api/contentful/utils/resolvers";
import { BrandHeroSection } from "~/components/BrandHeroSection/BrandHeroSection";

async function getHomePageData() {
  const latestVideos = await getLatestVideos();
  const latestVideoLinks = latestVideos.map(resolveVideoCardLinkProps);

  return {
    latestVideoLinks,
  };
}

export default async function HomePage() {
  const { latestVideoLinks } = await getHomePageData();

  return (
    <>
      <BrandHeroSection />
      <GridSection title="Latest Videos">
        {latestVideoLinks.map((video, i) => (
          <VideoCardLink key={i} {...video} />
        ))}
      </GridSection>
    </>
  );
}
