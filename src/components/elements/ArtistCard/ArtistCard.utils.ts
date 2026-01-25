import type { ArtistCardProps } from './ArtistCard.component';
import { toArtistPagePath, type ArtistCardFragment } from '~/contentful';

export function getArtistCardProps(fragment: ArtistCardFragment): ArtistCardProps {
  return {
    href: toArtistPagePath(fragment.slug),
    name: fragment.name || 'Name not set',
  };
}
