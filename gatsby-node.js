// Reference: https://www.gatsbyjs.org/docs/node-apis/

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // attach full page path to video nodes
  if (node.internal.type === 'ContentfulVideo') {
    const artist = getNode(node.artist___NODE);
    createNodeField({
      node,
      name: 'fullPath',
      value: `/${artist.slug}/${node.slug}/`
    });
  }
};

// add blog
// add playlists
// add social page
// add about
// add contact form
// add subscribe form

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  createPage({
    path: '/',
    component: require.resolve('./src/views/Home/Home.js')
  });

  // create pages for artists and videos
  const getArtists = await graphql(`
    query getArtists {
      allContentfulArtist {
        edges {
          node {
            id
            slug
            video {
              id
              fields {
                fullPath
              }
            }
          }
        }
      }
    }
  `);

  if (getArtists.errors) {
    reporter.panicOnBuild('Error running getArtists query in gatsby-node.js');
    return;
  }

  getArtists.data.allContentfulArtist.edges.forEach(artistEdge => {
    // page components use a graphql query to get data using variables set in context obj
    // create a page for each artist
    createPage({
      path: `/${artistEdge.node.slug}/`,
      component: require.resolve('./src/views/OneArtist/OneArtist.js'),
      context: {
        artistId: artistEdge.node.id
      }
    });

    // create a page for each of their videos
    artistEdge.node.video.forEach(videoEdge => {
      createPage({
        path: videoEdge.fields.fullPath, // assembled in onCreateNode
        component: require.resolve('./src/views/OneVideo/OneVideo.js'),
        context: {
          artistId: artistEdge.node.id,
          videoId: videoEdge.id
        }
      });
    });
  });

  // Create paginated All Videos section
  const getVideos = await graphql(`
    query getVideos {
      allContentfulVideo(sort: { fields: uploadDate, order: DESC }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (getVideos.errors) {
    reporter.panicOnBuild('Error running getVideos query in gatsby-node.js');
    return;
  }

  const allVideos = getVideos.data.allContentfulVideo.edges;
  const videosPerPage = 16;
  const numVideoPages = Math.ceil(allVideos.length / videosPerPage);
  Array.from({ length: numVideoPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/videos/' : `/videos/${i + 1}/`,
      component: require.resolve('./src/views/AllVideos/AllVideos.js'),
      context: {
        limit: videosPerPage,
        skip: i * videosPerPage,
        numVideoPages,
        currentPage: i + 1
      }
    });
  });

  // Create paginated Interviews section
  const getInterviews = await graphql(`
    query getInterviews {
      allContentfulVideo(
        sort: { fields: uploadDate, order: DESC }
        filter: { videoType: { eq: "Interview" } }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (getInterviews.errors) {
    reporter.panicOnBuild(
      'Error running getInterviews query in gatsby-node.js'
    );
    return;
  }

  const allInterviews = getInterviews.data.allContentfulVideo.edges;
  const interviewsPerPage = 16;
  const numInterviewPages = Math.ceil(allInterviews.length / interviewsPerPage);
  Array.from({ length: numInterviewPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/interviews/' : `/interviews/${i + 1}/`,
      component: require.resolve('./src/views/AllInterviews/AllInterviews.js'),
      context: {
        limit: interviewsPerPage,
        skip: i * interviewsPerPage,
        numInterviewPages,
        currentPage: i + 1
      }
    });
  });

  createPage({
    path: '/404/',
    component: require.resolve('./src/views/404/PageNotFound.js')
  });
};
