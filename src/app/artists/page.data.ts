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

  return { artists: data.artists?.items.filter(notEmpty) ?? [] };
}