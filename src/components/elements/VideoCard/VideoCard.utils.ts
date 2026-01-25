import { toVideoPagePath, type VideoCardFragment } from '~/contentful';
import type { VideoCardProps } from './VideoCard.component';

export function getVideoCardProps(fragment: VideoCardFragment): VideoCardProps {
  const videoPagePath = toVideoPagePath(fragment.artist?.slug, fragment.slug);
  return {
    title: fragment.title || 'Untitled',
    subtitle: fragment.subtitle || '',
    thumbnailSrc: fragment.thumbnail?.url || '',
    href: videoPagePath,
    artist: fragment.artist?.name || '',
    accentColor: fragment.artist?.accentColor || '',
    artistImageSrc: fragment.artist?.photo?.url || '',
  };
}
