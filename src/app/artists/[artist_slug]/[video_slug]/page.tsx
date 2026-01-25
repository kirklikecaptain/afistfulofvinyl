import { notFound } from 'next/navigation';
import { getVideoPageData } from './page.data';

export default async function VideoPage(props: PageProps<'/artists/[artist_slug]/[video_slug]'>) {
  const { artist_slug, video_slug } = await props.params;
  const { video } = await getVideoPageData(artist_slug, video_slug);

  if (!video) {
    return notFound();
  }

  return (
    <div>
      <div>{video.title}</div>
      <div>{video.artist?.name}</div>
    </div>
  );
}
