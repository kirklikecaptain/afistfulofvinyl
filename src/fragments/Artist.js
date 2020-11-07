import { graphql } from 'gatsby';

export const query = graphql`
  fragment Artist on ContentfulArtist {
    id
    artistName
    color
    photo {
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    artistBio {
      json
    }
    video {
      fields {
        pathname
      }
      title
    }
    fields {
      fullURL
      pathname
      colors {
        main
        light
        bright
        dark
        darkest
        textColor
      }
    }
  }
`;
