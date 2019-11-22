import { useEffect, useState } from 'react';

export const useVideoStats = videoId => {
  const [videoStats, setVideoStats] = useState({
    stats: [],
    loaded: false
  });
  useEffect(() => {
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyDb7SxO7qN0S0FoeGgJf8-nb6FkY37zK2Q`;
    fetch(videoUrl)
      .then(res => res.json())
      .then(res => setVideoStats({ stats: res.items[0].statistics, loaded: true }))
      .catch(err => console.error(err));
  }, [videoId]);
  return videoStats;
};
