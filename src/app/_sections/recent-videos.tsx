import { CardSection, VideoCard } from "~/components";
import { getLatestVideos } from "~/contentful";
import { resolveVideoCardProps } from "~/contentful/resolvers/video";

export async function RecentVideos() {
  const videos = await getLatestVideos();

  return (
    <CardSection title="Recent Videos" columns="3">
      {videos.map((video) => (
        <VideoCard key={video.sys.id} {...resolveVideoCardProps(video)} />
      ))}
    </CardSection>
  );
}
