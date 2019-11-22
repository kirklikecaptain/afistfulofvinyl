const path = require('path');
const tinyColor = require('tinycolor2');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.artistName) {
    // add complete artist path to node using the artist slug
    createNodeField({
      node,
      name: 'artistPath',
      value: `/${node.slug}/`
    });
  }
  // build a color scheme using a hex value add it to the artist node
  if (node.color) {
    const { h, l } = tinyColor(node.color).toHsl();
    const mainHue = Math.round(h);
    const scheme = {
      useTextColor: l > 0.5 ? 'dark' : 'light',
      primary: node.color,
      darkest: `hsl(${mainHue}, 35%, 8%)`,
      deep: `hsl(${mainHue}, 35%, 18%)`,
      mid: `hsl(${mainHue}, 35%, 35%)`,
      light: `hsl(${mainHue}, 35%, 75%)`,
      tint: `hsl(${mainHue}, 35%, 95%)`
    };
    createNodeField({
      node,
      name: 'colors',
      value: scheme
    });
  }
  // add complete video path to node using artist and video slug
  if (node.videoId) {
    const artist = getNode(node.artist___NODE);
    createNodeField({
      node,
      name: 'videoPath',
      value: `/${artist.slug}/${node.slug}/`
    });
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  createPage({
    path: '/',
    component: path.resolve('./src/views/Home.js'),
    context: {
      transparentNav: true
    }
  });

  createPage({
    path: '/artists/',
    component: path.resolve('./src/views/AllArtists.js')
  });

  createPage({
    path: '/contact/',
    component: path.resolve('./src/views/Contact.js')
  });

  const allPageData = await graphql(
    `
      {
        allContentfulArtist {
          edges {
            node {
              id
              slug
            }
          }
        }
        allContentfulVideo(sort: { fields: uploadDate, order: DESC }) {
          edges {
            node {
              id
              slug
              videoType
              artist {
                id
                slug
              }
            }
          }
        }
      }
    `
  );

  allPageData.data.allContentfulArtist.edges.forEach(edge => {
    const { id, slug } = edge.node;
    createPage({
      path: `/${slug}/`,
      component: path.resolve('./src/views/OneArtist.js'),
      context: {
        id,
        transparentNav: true
      }
    });
  });

  allPageData.data.allContentfulVideo.edges.forEach(edge => {
    const artistSlug = edge.node.artist.slug;
    const artistId = edge.node.artist.id;
    const { id, slug } = edge.node;
    createPage({
      path: `/${artistSlug}/${slug}/`,
      component: path.resolve('./src/views/OneVideo.js'),
      context: {
        id,
        artistId,
        transparentNav: true
      }
    });
  });

  const videosPerPage = 24;
  const allMusicVideos = allPageData.data.allContentfulVideo.edges.filter(video => video.node.videoType === 'Song');
  const numMusicVideoPages = Math.ceil(allMusicVideos.length / videosPerPage);
  Array.from({ length: numMusicVideoPages }).forEach((_, i) => {
    const prefix = 'music';
    createPage({
      path: i === 0 ? `/${prefix}/` : `/${prefix}/page-${i + 1}/`,
      component: path.resolve('./src/views/AllMusicVideos.js'),
      context: {
        prefix,
        limit: videosPerPage,
        skip: i * videosPerPage,
        totalPages: numMusicVideoPages,
        totalItems: numMusicVideoPages * videosPerPage,
        currentPage: i + 1
      }
    });
  });

  const allInterviewVideos = allPageData.data.allContentfulVideo.edges.filter(
    video => video.node.videoType === 'Interview'
  );
  const numInterviewVideoPages = Math.ceil(allInterviewVideos.length / videosPerPage);
  Array.from({ length: numInterviewVideoPages }).forEach((_, i) => {
    const prefix = 'interviews';
    createPage({
      path: i === 0 ? `/${prefix}/` : `/${prefix}}/page-${i + 1}/`,
      component: path.resolve('./src/views/AllInterviewVideos.js'),
      context: {
        prefix,
        limit: videosPerPage,
        skip: i * videosPerPage,
        totalPages: numInterviewVideoPages,
        totalItems: numInterviewVideoPages * videosPerPage,
        currentPage: i + 1
      }
    });
  });

  createPage({
    path: '/404/',
    component: path.resolve('./src/views/404.js')
  });
};
