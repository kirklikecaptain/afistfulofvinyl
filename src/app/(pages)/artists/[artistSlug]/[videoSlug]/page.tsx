import { notFound } from "next/navigation";

import { ArtistBreadCrumbs, Page, RichText, VideoPlayer } from "~/components";

import {
  VideoPageProps,
  getVideoPageData,
  generateVideoPageMetadata,
  generateVideoPageParams,
} from "./data";

export const generateStaticParams = generateVideoPageParams;
export const generateMetadata = generateVideoPageMetadata;

export default async function VideoPage(props: VideoPageProps) {
  const {
    params: { artistSlug, videoSlug },
  } = props;

  const { video } = await getVideoPageData({ artistSlug, videoSlug });

  if (!video) {
    return notFound();
  }

  return (
    <Page>
      <ArtistBreadCrumbs />
      <VideoPlayer url={video.fields.videoUrl} />
      <RichText field={video.fields.longDescription} />
    </Page>
  );
}
