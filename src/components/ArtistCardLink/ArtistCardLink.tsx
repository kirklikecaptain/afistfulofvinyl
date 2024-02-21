import { LinkCard, type LinkCardProps } from "../LinkCard";

export interface ArtistCardLinkProps<T extends string> extends LinkCardProps<T> {
  name: string;
}

export function ArtistCardLink<T extends string>({ name, href }: ArtistCardLinkProps<T>) {
  return <LinkCard href={href}>{name}</LinkCard>;
}
