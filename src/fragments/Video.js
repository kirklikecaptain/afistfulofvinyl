import { graphql } from 'gatsby';

export const query = graphql`
  fragment Video on ContentfulVideo {
    id
    title
    videoType
    videoId
    uploadDate(formatString: "MMMM d, YYYY")
    fields {
      fullURL
      pathname
    }
    thumbnail {
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    videoDescription {
      json
    }
  }
`;
