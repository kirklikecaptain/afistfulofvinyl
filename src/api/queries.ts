import { contentful } from "./contentful";
import { graphql } from "./generated";

const homePageContent = graphql(/* GraphQL */ `
  query homePageContent {
    meta: pageCollection(where: { slug: "home" }) {
      items {
        metaTitle
        metaDescription
      }
    }
    recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {
      items {
        title
        slug
        artist {
          name
          slug
          accentColor
        }
      }
    }
  }
`);

export async function getHomePageContent() {
  const { meta, recentVideos } = await contentful.request(homePageContent);

  return { meta: meta?.items[0], recentVideos };
}

const allArtists = graphql(/* GraphQL */ `
  query allArtists {
    artistCollection(order: name_ASC, limit: 200) {
      items {
        name
        slug
        accentColor
      }
    }
  }
`);

export async function getAllArtists() {
  const { artistCollection } = await contentful.request(allArtists);

  return artistCollection?.items;
}

const allVideoSlugs = graphql(/* GraphQL */ `
  query allVideoSlugs {
    videoCollection(limit: 500) {
      items {
        slug
        artist {
          slug
        }
      }
    }
  }
`);

const allVideosForArtist = graphql(/* GraphQL */ `
  query allVideosForArtist($slug: String!) {
    videos: videoCollection(where: { artist: { slug: $slug } }) {
      items {
        title
        slug
        artist {
          name
          slug
          accentColor
        }
      }
    }
  }
`);

export async function getAllVideosForArtist(slug: string) {
  const { videos } = await contentful.request(allVideosForArtist, { slug });

  return videos?.items;
}

export async function getAllVideoSlugs() {
  const { videoCollection } = await contentful.request(allVideoSlugs);

  return videoCollection?.items.map((item) => ({
    video: item?.slug,
    artist: item?.artist?.slug,
  }));
}

const artistPageContent = graphql(/* GraphQL */ `
  query ArtistPage($slug: String!) {
    bio: artistCollection(where: { slug: $slug }) {
      items {
        name
        slug
        accentColor
      }
    }
    videos: videoCollection(where: { artist: { slug: $slug } }, order: uploadDate_DESC) {
      items {
        title
        slug
        artist {
          name
          slug
          accentColor
        }
      }
    }
  }
`);

export async function getArtistPageContent(slug: string) {
  const { bio, videos } = await contentful.request(artistPageContent, {
    slug,
  });

  return {
    bio: bio?.items[0],
    videos,
  };
}

const videoPageContent = graphql(/* GraphQL */ `
  query videoPage($videoSlug: String!, $artistSlug: String!) {
    videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {
      items {
        title
        slug
        artist {
          name
          slug
          accentColor
        }
      }
    }
  }
`);

export async function getVideoPageContent(artistSlug: string, videoSlug: string) {
  const { videoCollection } = await contentful.request(videoPageContent, {
    artistSlug,
    videoSlug,
  });

  return videoCollection?.items[0];
}
