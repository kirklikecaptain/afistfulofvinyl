import { draftMode } from "next/headers";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { api } from "~/api";
import { Slug } from "~/api/types";

import { ArtistPageParams, ArtistPageProps } from "../data";

export type VideoPageParams = ArtistPageParams & {
  videoSlug: Slug;
};

export type VideoPageProps = {
  params: VideoPageParams;
};

export async function getVideoPageData({ artistSlug, videoSlug }: VideoPageProps["params"]) {
  const options = { preview: draftMode().isEnabled };

  const artist = await api.artists.getOne(artistSlug, options);
  const videos = await api.videos.getByArtist(artistSlug, options);

  return {
    artist,
    video: videos.find(({ fields }) => fields.slug === videoSlug),
    moreVideos: videos.filter(({ fields }) => fields.slug !== videoSlug),
  };
}

export async function generateVideoPageParams(
  props: ArtistPageProps,
): Promise<Omit<VideoPageParams, "artistSlug">[]> {
  const {
    params: { artistSlug },
  } = props;

  const videos = await api.videos.getByArtist(artistSlug);

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
