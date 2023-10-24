import { Heading } from "~/libs/chakra-ui/react";
import { Link } from "~/components/Link";
import { getArtistPageData } from "~/api/getArtistPageData";
import { Layout } from "~/components/Layout/Layout";

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
      {videos?.map((video) => (
        <div key={video?.slug}>
          <Link href={`/artists/${page?.slug}/${video?.slug}`}>{video?.title}</Link>
        </div>
      ))}
    </Layout>
  );
}
