import { Anchor, Box, Breadcrumbs } from "@mantine/core";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

import { Link } from "~/components";

interface BreadcrumbLink<T extends string> {
  label: string;
  href: T;
}

interface ArtistBreadCrumbsProps<T extends string> {
  links?: BreadcrumbLink<T>[];
}

export function ArtistBreadCrumbs<T extends string>({ links }: ArtistBreadCrumbsProps<T>) {
  return (
    <Breadcrumbs p="lg">
      <Link href="/artists">Artist</Link>
      <Anchor href="/artists">Artist Name</Anchor>
      <Anchor href="/artists">Video Title</Anchor>
    </Breadcrumbs>
  );
}
