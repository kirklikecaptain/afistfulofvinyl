import type { ImageLoader } from 'next/image';

export const loader: ImageLoader = ({ src, width, quality = 80 }) => {
  if (src.startsWith('https://images.ctfassets.net')) {
    return `${src}?fm=jpg&w=${width}&q=${quality}`;
  }

  return src;
};
