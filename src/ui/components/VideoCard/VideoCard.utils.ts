import { type VideoCardFragment } from '~/lib/contentful';
import { toVideoPagePath } from '~/utils/paths';

import type { VideoCardProps } from './VideoCard';

export function getVideoCardProps(fragment: VideoCardFragment): VideoCardProps {
  return {
    title: fragment.title || 'Untitled',
    subtitle: fragment.subtitle || '',
    thumbnailSrc: fragment.thumbnail?.url || '',
    href: toVideoPagePath(fragment.artist?.slug, fragment.slug),
    artist: fragment.artist?.name || '',
    accentColor: fragment.artist?.accentColor || '',
    artistImageSrc: fragment.artist?.photo?.url || '',
  };
}
