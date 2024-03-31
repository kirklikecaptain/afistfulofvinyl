import { getAllArtists, getAllVideos } from "~/api";

export async function getRootLayoutData() {
  const videos = await getAllVideos();
  const artists = await getAllArtists();

  return {
    videos,
    artists,
  };
}
