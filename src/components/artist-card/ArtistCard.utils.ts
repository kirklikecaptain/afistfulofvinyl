import { toArtistPagePath, type ArtistCardFragment } from '~/contentful';

import type { ArtistCardProps } from './ArtistCard';

export function getArtistCardProps(fragment: ArtistCardFragment): ArtistCardProps {
  return {
    href: toArtistPagePath(fragment.slug),
    name: fragment.name || 'Name not set',
  };
}
