import { graphql } from 'gatsby';

export const query = graphql`
  fragment VideoCard on ContentfulVideo {
    id
    title
    videoType
    uploadDate(formatString: "MMMM d, YYYY")
    fields {
      pathname
    }
    thumbnail {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    artist {
      artistName
    }
  }
`;
