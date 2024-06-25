import { contentful, graphql } from "~/graphql";
import { notEmpty } from "~/utils/filters";

const ArtistProfilePageDocument = graphql(/* GraphQL */ `
  query ArtistProfilePageQuery($artistSlug: String!) {
    artist: artistCollection(where: { slug: $artistSlug }) {
      items {
        name
        slug
        accentColor
        shortBio
        photo {
          url
          width
          height
          description
        }
      }
    }
    videos: videoCollection(where: { artist: { slug: $artistSlug } }) {
      items {
        ...VideoCardLink
      }
    }
  }
`);

export async function fetchArtistProfilePageData(artistSlug: string) {
  const data = await contentful.request(ArtistProfilePageDocument, { artistSlug });

  return {
    artist: data.artist?.items.filter(notEmpty)[0],
    videos: data.videos?.items.filter(notEmpty) ?? [],
  };
}
