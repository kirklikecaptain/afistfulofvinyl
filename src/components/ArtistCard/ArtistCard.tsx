import { LinkCard, type LinkCardProps } from "../LinkCard";

export interface ArtistCardProps<T extends string> extends LinkCardProps<T> {
  name: string;
}

export function ArtistCard<T extends string>({ name, href }: ArtistCardProps<T>) {
  return <LinkCard href={href}>{name}</LinkCard>;
}
