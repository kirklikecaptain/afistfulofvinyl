import { MetadataRoute, Route } from "next";

import { getAllArtists, getAllVideos } from "~/api";

const baseURL = "https://afistfulofvinyl.com";

function pageURL<T extends string>(route: Route<T>) {
  return baseURL + route;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: pageURL("/artists"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: pageURL("/videos"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: pageURL("/contact"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const [artists, videos] = await Promise.all([getAllArtists(), getAllVideos()]);

  artists.forEach((artist) => {
    pages.push({
      url: pageURL(`/artists/${artist.fields.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  });

  videos.forEach((video) => {
    if (video.fields.artist) {
      pages.push({
        url: pageURL(`/artists/${video.fields.artist.fields.slug}/${video.fields.slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  });

  return pages.sort((a, b) => a.url.localeCompare(b.url));
}
