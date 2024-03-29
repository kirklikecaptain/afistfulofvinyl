import { draftMode } from "next/headers";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getVideosByArtistSlug } from "~/api";
import { Slug } from "~/libs/contentful/types";

import { ArtistPageParams, ArtistPageProps } from "../data";

export type VideoPageStaticParams = {
  videoSlug: Slug;
};

export type VideoPageParams = ArtistPageParams & VideoPageStaticParams;

export type VideoPageProps = {
  params: VideoPageParams;
};

export async function generateVideoPageParams(
  parentProps: ArtistPageProps,
): Promise<VideoPageStaticParams[]> {
  const { artistSlug } = parentProps.params;
  const videos = await getVideosByArtistSlug(artistSlug);

  return videos.map((artist) => ({
    videoSlug: artist.fields.slug,
  }));
}

export async function getVideoPageData({ artistSlug, videoSlug }: VideoPageParams) {
  const previewMode = draftMode().isEnabled;
  const videos = await getVideosByArtistSlug(artistSlug, { previewMode });

  return {
    video: videos.find(({ fields }) => fields.slug === videoSlug),
    moreVideos: videos.filter(({ fields }) => fields.slug !== videoSlug),
  };
}

export async function generateVideoPageMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const { artistSlug, videoSlug } = params;

  const { video } = await getVideoPageData({ artistSlug, videoSlug });

  if (!video) {
    notFound();
  }

  return {
    title: video.fields.title,
    description: video.fields.shortDescription,
  };
}
