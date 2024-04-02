import { Metadata } from "next";
import { draftMode } from "next/headers";

import { api } from "~/api";
import { Slug } from "~/api/types";

export type ArtistPageParams = {
  artistSlug: Slug;
};

export type ArtistPageProps = {
  params: ArtistPageParams;
};

export async function getArtistPageData({ artistSlug }: ArtistPageParams) {
  const options = { preview: draftMode().isEnabled };

  const artist = await api.artists.getOne(artistSlug, options);
  const videos = await api.videos.getByArtist(artistSlug, options);

  return { artist, videos };
}

export async function generateArtistPageParams(): Promise<ArtistPageParams[]> {
  const artists = await api.artists.getAll();

  return artists.map((artist) => ({
    artistSlug: artist.fields.slug,
  }));
}

export async function generateArtistPageMetadata(props: ArtistPageProps): Promise<Metadata> {
  const {
    params: { artistSlug },
  } = props;

  const { artist } = await getArtistPageData({ artistSlug });

  return {
    title: artist.fields.name,
    description: artist.fields.shortBio,
  };
}
