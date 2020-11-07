import { graphql, useStaticQuery } from 'gatsby';

export default function useHomePageData() {
  const { videos } = useStaticQuery(graphql`
    query HomeHero {
      videos: allContentfulVideo(
        sort: { fields: uploadDate, order: DESC }
        limit: 13
      ) {
        nodes {
          id
          title
          videoId
          videoType
          fields {
            pathname
          }
          thumbnail {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          artist {
            artistName
            fields {
              colors {
                dark
                darkest
                light
                main
              }
            }
          }
        }
      }
    }
  `);
  return {
    videos,
  };
}
