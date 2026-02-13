import { type ArtistCardFragment } from '~/lib/contentful';
import { toArtistPagePath } from '~/utils/paths';

import type { ArtistCardProps } from './ArtistCard';

export function getArtistCardProps(fragment: ArtistCardFragment): ArtistCardProps {
  return {
    href: toArtistPagePath(fragment.slug),
    name: fragment.name || 'Name not set',
    accentColor: fragment.accentColor ?? '#00DD00',
  };
}
