import { Metadata } from "next";
import { notFound } from "next/navigation";

import { fetchArtistProfilePageData } from "./_data";
import { ArtistProfilePageProps } from "./page";

export async function fetchMetadata({ params }: ArtistProfilePageProps): Promise<Metadata> {
  const { artist } = await fetchArtistProfilePageData(params.artist);

  if (!artist) {
    return notFound();
  }

  return {
    title: artist.name,
    description: artist.shortBio,
  };
}
