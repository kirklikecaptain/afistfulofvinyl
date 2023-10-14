import { Heading } from "~/libs/chakra-ui/react";
import { getArtistPageContent } from "~/api/queries";
import { Link } from "~/components/Link";

interface ArtistPageProps {
  params: {
    artist: string;
  };
}

export async function generateMetadata({ params }: ArtistPageProps) {
  const { bio } = await getArtistPageContent(params.artist);

  return { title: bio?.name };
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { bio, videos } = await getArtistPageContent(params.artist);

  return (
    <main>
      <Heading>{bio?.name}</Heading>
      {videos?.items.map((video) => (
        <div key={video?.slug}>
          <Link href={`/artists/${bio?.slug}/${video?.slug}`}>{video?.title}</Link>
        </div>
      ))}
    </main>
  );
}
