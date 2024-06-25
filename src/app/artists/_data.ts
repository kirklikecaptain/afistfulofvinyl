import { contentful, graphql } from "~/graphql";
import { notEmpty } from "~/utils/filters";

const AllArtistsPageDocument = graphql(/* GraphQL */ `
  query AllArtistsPageQuery {
    artists: artistCollection(limit: 150, order: name_ASC) {
      items {
        name
        slug
        accentColor
        photo {
          url
        }
        linkedFrom {
          videoCollection(limit: 20) {
            total
          }
        }
      }
    }
  }
`);

export async function fetchAllArtistsPageData() {
  const data = await contentful.request(AllArtistsPageDocument);
  const artists =
    data.artists?.items.filter(notEmpty).filter(
      // TODO: Remove this filter when all published artists have linked videos
      (video) => video.linkedFrom?.videoCollection?.total && video.linkedFrom?.videoCollection?.total > 0,
    ) ?? [];

  return {
    artists,
  };
}
