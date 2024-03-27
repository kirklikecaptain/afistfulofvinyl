import { Metadata } from "next";
import { draftMode } from "next/headers";

import { getAllArtists, getArtistBySlug, getVideosByArtistSlug } from "~/api";
import { Slug } from "~/api/contentful/types";
import { resolveVideoCardProps } from "~/api/contentful/utils/propResolvers";

export type ArtistPageParams = {
  artistSlug: Slug;
};

export type ArtistPageProps = {
  params: ArtistPageParams;
};

export async function getArtistPageParams(): Promise<ArtistPageParams[]> {
  const artists = await getAllArtists();

  return artists.map((artist) => ({
    artistSlug: artist.fields.slug,
  }));
}

export async function getArtistPageData({ artistSlug }: ArtistPageParams) {
  const previewMode = draftMode().isEnabled;

  const artist = await getArtistBySlug(artistSlug, { previewMode });
  const videos = await getVideosByArtistSlug(artistSlug, { previewMode });
  const videoLinkCards = videos.map(resolveVideoCardProps);

  return { artist, videoLinkCards };
}

export async function getArtistPageMetadata({
  params: { artistSlug },
}: ArtistPageProps): Promise<Metadata> {
  const { artist } = await getArtistPageData({ artistSlug });

  return {
    title: artist.fields.name,
    description: artist.fields.shortBio,
  };
}
