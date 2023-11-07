import { Box, Flex, Heading, Text } from "~/libs/chakra-ui/react";
import { Link } from "~/components/Link";
import { getArtistPageData } from "~/api/getArtistPageData";
import { Layout } from "~/components/Layout";
import Color from "color";
import { getArtistColors } from "~/theme/utils";

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

  const colors = getArtistColors(page?.accentColor);

  return (
    <Layout>
      <Heading>{page?.name}</Heading>
      <Text>{page?.pagePath}</Text>

      <Flex>
        {Object.values(colors).map((c) => (
          <Box key={c} flex="1" bg={c!} height={8} />
        ))}
      </Flex>
      {videos?.map((video) => (
        <div key={video?.slug}>
          <Link href={video?.pagePath!}>{video?.title}</Link>
        </div>
      ))}
    </Layout>
  );
}
