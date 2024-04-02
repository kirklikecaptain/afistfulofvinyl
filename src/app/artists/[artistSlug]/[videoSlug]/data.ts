import { draftMode } from "next/headers";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getArtistBySlug, getVideosByArtistSlug } from "~/api";
import { Slug } from "~/libs/contentful/types";

import { ArtistPageParams, ArtistPageProps } from "../data";

export type VideoPageParams = {
  videoSlug: Slug;
};

export type VideoPageProps = {
  params: ArtistPageParams & VideoPageParams;
};

export async function getVideoPageData({ artistSlug, videoSlug }: VideoPageProps["params"]) {
  const previewMode = draftMode().isEnabled;

  const artist = await getArtistBySlug(artistSlug, { previewMode });
  const videos = await getVideosByArtistSlug(artistSlug, { previewMode });

  return {
    artist,
    video: videos.find(({ fields }) => fields.slug === videoSlug),
    moreVideos: videos.filter(({ fields }) => fields.slug !== videoSlug),
  };
}

export async function generateVideoPageParams(
  parentProps: ArtistPageProps,
): Promise<VideoPageParams[]> {
  const {
    params: { artistSlug },
  } = parentProps;

  const videos = await getVideosByArtistSlug(artistSlug);

  return videos.map((artist) => ({
    videoSlug: artist.fields.slug,
  }));
}

export async function generateVideoPageMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const { artistSlug, videoSlug } = params;

  const { video } = await getVideoPageData({ artistSlug, videoSlug });

  if (!video) {
    notFound();
  }

  return {
    title: `${video.fields.title} | ${video.fields.artist?.fields.name}`,
    description: video.fields.shortDescription,
  };
}
