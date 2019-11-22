import React from 'react';
import { graphql } from 'gatsby';

const AllVideos = ({ data }) => {
  return (
    <div>
      <h1>All Videos</h1>
    </div>
  );
};

export default AllVideos;

// export const allVideoQuery = graphql`
//   query videoQuery($skip: Int!, $limit: Int!) {
//     allContentfulVideo(sort: { fields: uploadDate, order: DESC }, limit: $limit, skip: $skip) {
//       edges {
//         node {
//           id
//           title
//           artist {
//             id
//             artistName
//           }
//         }
//       }
//     }
//   }
// `;
