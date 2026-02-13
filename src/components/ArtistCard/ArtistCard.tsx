import { Box } from '@mantine/core';

import { Link } from '~/components/Link';
import type { ArtistCardFragment } from '~/lib/contentful';
import { fragmentToProps, type PropsOrFragment } from '~/utils/fragments';
import { useArtistColors } from '~/utils/useArtistColors';

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
      <pre>{JSON.stringify(accentColor, null, 2)}</pre>
      <Box bg={colors.accent.color} p="md">
        <Link href={href} fw="bold" c={colors.accent.contrast}>
          {name}
        </Link>
      </Box>
      {Object.entries(colors).map(([key, { color, contrast }]) => (
        <Box key={key} bg={color} c={contrast} p="xs">
          {key} - {contrast}
        </Box>
      ))}
    </Box>
  );
}
