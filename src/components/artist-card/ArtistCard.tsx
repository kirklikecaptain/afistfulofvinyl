import { Link } from '~/components/link';
import { fragmentToProps, type ArtistCardFragment, type PropsOrFragment } from '~/contentful';

import { getArtistCardProps } from './ArtistCard.utils';

export type ArtistCardProps = {
  href: string;
  name: string;
};

export function ArtistCard(props: PropsOrFragment<ArtistCardProps, ArtistCardFragment>) {
  const { href, name } = fragmentToProps(props, getArtistCardProps);

  return (
    <div>
      <Link href={href}>{name}</Link>
    </div>
  );
}
