import { contentful, graphql } from "~/graphql";
import { notEmpty } from "~/utils/filters";

const VideoPageDocument = graphql(/* GraphQL */ `
  query VideoPageQuery($videoSlug: String!, $artistSlug: String!) {
    video: videoCollection(limit: 1, where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {
      items {
        title
        slug
        subtitle
        videoUrl
        shortDescription
        longDescription {
          links {
            entries {
              inline {
                sys {
                  id
                }
              }
              block {
                sys {
                  id
                }
              }
            }
            assets {
              block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }
            }
          }
          json
        }
        artist {
          name
          slug
          accentColor
          photo {
            url
          }
        }
        uploadDate
        videoType
        thumbnail {
          url
          description
        }
      }
    }
    relatedVideos: videoCollection(limit: 3, where: { artist: { slug: $artistSlug }, slug_not: $videoSlug }) {
      items {
        ...VideoCardLink
      }
    }
    recentVideos: videoCollection(limit: 3, order: uploadDate_DESC) {
      items {
        ...VideoCardLink
      }
    }
  }
`);

export async function fetchVideoPageData(params: { artistSlug: string; videoSlug: string }) {
  const data = await contentful.request(VideoPageDocument, params);

  const featuredVideo = data.video?.items.filter(notEmpty)[0];
  const byArtist = data.relatedVideos?.items.filter(notEmpty) ?? [];
  const recentVideos = data.recentVideos?.items.filter(notEmpty) ?? [];

  return {
    video: featuredVideo,
    relatedVideos: byArtist.length ? byArtist : recentVideos,
  };
}
