import { graphql } from 'gatsby';

export const query = graphql`
  fragment Venue on ContentfulVenue {
    name
    location
    logo {
      fluid {
        sizes
      }
    }
  }
`;
