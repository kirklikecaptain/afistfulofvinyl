import React from 'react';
import { graphql } from 'gatsby';

import Page from '../../components/general/Page';

import VideoPlayer from './sections/VideoPlayer';

export const query = graphql`
  query VideoPageData($id: String, $artistId: String) {
    mainVideo: contentfulVideo(id: { eq: $id }) {
      ...Video
      artist {
        ...Artist
      }
      venue {
        ...Venue
      }
    }
    moreVideos: allContentfulVideo(
      filter: { id: { ne: $id }, artist: { id: { eq: $artistId } } }
    ) {
      nodes {
        ...VideoCard
      }
    }
  }
`;

function VideoPage(props) {
  const {
    data: { moreVideos, mainVideo },
  } = props;

  const {
    title,
    videoType,
    artist: { artistName },
  } = mainVideo;

  const metaTitle = `${title} - ${artistName} | A Fistful of Vinyl`;

  // const metaDescription =
  // videoType === 'Song'
  //   ? `Watch ${artistName} perform ${title} live at ${venueName} in ${venueLocation}.`
  //   : `AFoV sits down with ${artistName} for an interview at ${venueName} in ${venueLocation}.`;

  const metaDescription =
    videoType === 'Song'
      ? `Watch ${artistName} perform ${title} live`
      : `AFoV sits down with ${artistName} for an interview`;

  return (
    <Page title={metaTitle} description={metaDescription}>
      <VideoPlayer video={mainVideo} moreVideos={moreVideos} />
    </Page>
  );
}

export default VideoPage;
