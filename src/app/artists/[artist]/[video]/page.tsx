import { Page } from "~/components";
import { getVideoBySlugs } from "~/contentful";

export type VideoPageProps = {
  params: {
    artist: string;
    video: string;
  };
};

export default async function VideoPage({ params }: VideoPageProps) {
  const video = await getVideoBySlugs(params);

  return <Page>{video.fields.title}</Page>;
}
