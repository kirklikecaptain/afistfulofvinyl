import { contentful, graphql } from "~/graphql";
import { notEmpty } from "~/utils/filters";

const AllVideoPageParamsDocument = graphql(/* GraphQL */ `
  query AllVideoPageParams {
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

export async function fetchAllVideoPageParams() {
  const data = await contentful.request(AllVideoPageParamsDocument);

  return (
    data.videoCollection?.items.filter(notEmpty).map(({ slug, artist }) => ({
      artist: artist?.slug,
      video: slug,
    })) ?? []
  );
}
