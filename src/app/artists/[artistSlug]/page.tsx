import { getArtistPageData } from "~/api/queries/getArtistPageData";
import { Heading, Text } from "~/libs/chakra-ui/react";
import { Link, Layout } from "~/components";

interface ArtistPageProps {
  params: {
    artistSlug: string;
  };
}

export async function generateMetadata({ params }: ArtistPageProps) {
  const { artistSlug } = params;
  const { page } = await getArtistPageData({ artistSlug });

  return { title: page?.name };
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { artistSlug } = params;
  const { page, videos } = await getArtistPageData({ artistSlug });

  return (
    <Layout>
      <Heading>{page?.name}</Heading>
      <Text>{page?.pagePath}</Text>
      {videos?.map((video) => (
        <div key={video?.sys.id}>
          <Link href={video?.pagePath!}>{video?.title}</Link>
        </div>
      ))}
    </Layout>
  );
}
