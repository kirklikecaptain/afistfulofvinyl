import { getAllArtists } from "./queries/artists/getAllArtists";
import { getArtistBySlug } from "./queries/artists/getArtistBySlug";
import { getAllVideos } from "./queries/videos/getAllVideos";
import { getLatestVideos } from "./queries/videos/getLatestVideos";
import { getVideoBySlugs } from "./queries/videos/getVideoBySlugs";
import { getVideosByArtistSlug } from "./queries/videos/getVideosByArtistSlug";

export const api = {
  artists: {
    getOne: getArtistBySlug,
    getAll: getAllArtists,
  },
  videos: {
    getOne: getVideoBySlugs,
    getAll: getAllVideos,
    getLatest: getLatestVideos,
    getByArtist: getVideosByArtistSlug,
  },
};
