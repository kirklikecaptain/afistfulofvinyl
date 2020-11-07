import chroma from 'chroma-js';
import { resolve } from 'path';

// Gatsby API: onCreateNode - https://www.gatsbyjs.com/docs/node-apis/#onCreateNode

export function onCreateNode(params) {
  const { node, actions, getNode } = params;

  if (node.internal.type === 'ContentfulArtist') {
    // attach full href and pathname to artist nodes
    const artistPath = `/${node.slug}/`;

    actions.createNodeField({
      node,
      name: 'fullURL',
      value: process.env.GATSBY_WEBSITE_ROOT + artistPath,
    });

    actions.createNodeField({
      node,
      name: 'pathname',
      value: artistPath,
    });

    // generate a monochrome color scheme from artist color set in contentful
    const baseColor = node.color;
    const baseH = chroma(baseColor).get('hsl.h');
    const baseL = chroma(baseColor).get('hsl.l');

    actions.createNodeField({
      node,
      name: 'colors',
      value: {
        textColor: baseL < 0.5 ? 'white' : 'black',
        main: baseColor,
        bright: `hsl(${baseH}, 100%, 50%)`,
        light: `hsl(${baseH}, 80%, 90%)`,
        dark: `hsl(${baseH}, 25%, 30%)`,
        darkest: `hsl(${baseH}, 20%, 18%)`,
      },
    });
  }

  // attach full href and pathname to video nodes
  if (node.internal.type === 'ContentfulVideo') {
    const artist = getNode(node.artist___NODE);
    const videoPath = `/${artist.slug}/${node.slug}/`;

    actions.createNodeField({
      node,
      name: 'fullURL',
      value: process.env.GATSBY_WEBSITE_ROOT + videoPath,
    });

    actions.createNodeField({
      node,
      name: 'pathname',
      value: videoPath,
    });
  }
}

// Gatsby API: createPages - https://www.gatsbyjs.com/docs/node-apis/#createPages

function createMainPages({ actions }) {
  actions.createPage({
    path: '/',
    component: resolve('./src/templates/HomePage/index.jsx'),
  });

  actions.createPage({
    path: '/404/',
    component: resolve('./src/templates/404Page/index.jsx'),
  });
}

async function createPagesFromArtists(params) {
  const { graphql, actions } = params;

  const {
    data: {
      artists: { nodes: artistNodes },
    },
  } = await graphql(`
    query {
      artists: allContentfulArtist {
        nodes {
          id
          fields {
            pathname
          }
        }
      }
    }
  `);

  artistNodes.forEach(node => {
    const {
      id,
      fields: { pathname },
    } = node;

    actions.createPage({
      path: pathname,
      component: require.resolve('./src/templates/ArtistPage/index.jsx'),
      context: { id },
    });
  });
}

async function createPagesFromVideos(params) {
  const { graphql, actions } = params;

  const {
    data: {
      videos: { nodes: videoNodes },
    },
  } = await graphql(`
    query {
      videos: allContentfulVideo {
        nodes {
          id
          artist {
            id
          }
          fields {
            pathname
          }
        }
      }
    }
  `);

  videoNodes.forEach(node => {
    const {
      id,
      fields: { pathname },
      artist: { id: artistId },
    } = node;

    actions.createPage({
      path: pathname,
      component: require.resolve('./src/templates/VideoPage/index.jsx'),
      context: { id, artistId },
    });
  });
}

// Gatsby API: createPages - https://www.gatsbyjs.com/docs/node-apis/#createPages

export async function createPages(params) {
  await Promise.all([
    createMainPages(params),
    createPagesFromArtists(params),
    createPagesFromVideos(params),
  ]);
}
