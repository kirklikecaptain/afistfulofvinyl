import { notFound } from "next/navigation";

import { getAllArtists } from "~/api";

import { getArtistProfilePageData } from "./page.data";

interface ArtistProfilePageParams {
  artistSlug: string;
}
interface ArtistProfilePageProps {
  params: ArtistProfilePageParams;
}

export async function generateStaticParams() {
  const artists = await getAllArtists();

  return artists.map((artist) => ({ artistSlug: artist.fields.slug }));
}

export default async function ArtistProfilePage(props: ArtistProfilePageProps) {
  const {
    params: { artistSlug },
  } = props;

  const { artist } = await getArtistProfilePageData(artistSlug);

  if (!artist) {
    return notFound();
  }

  return <div>{artist.fields.name}</div>;
}
