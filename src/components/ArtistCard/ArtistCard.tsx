import { Box, SimpleGrid } from '@mantine/core';

import { Link } from '~/components/Link';
import { useArtistColors } from '~/hooks/useArtistColors';
import type { ArtistCardFragment } from '~/lib/contentful';
import { fragmentToProps, type PropsOrFragment } from '~/utils/fragments';

import { getArtistCardProps } from './ArtistCard.utils';

export type ArtistCardProps = {
  href: string;
  name: string;
  accentColor: string;
};

export function ArtistCard(props: PropsOrFragment<ArtistCardProps, ArtistCardFragment>) {
  const { href, name, accentColor } = fragmentToProps(props, getArtistCardProps);
  const colors = useArtistColors(accentColor);

  return (
    <Box>
      <Box bg={colors.primary} p="md">
        <Link href={href} c={colors.primaryContrast}>
          {name} {colors.luminance}
        </Link>
      </Box>
      <SimpleGrid cols={5} spacing={0}>
        {[colors.lightest, colors.light, colors.mid, colors.dark, colors.darkest].map((color) => (
          <Box key={color} bg={color} h={30} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
