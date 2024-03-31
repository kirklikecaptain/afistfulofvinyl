import { Text, Box, Breadcrumbs } from "@mantine/core";

import { Link } from "~/components";

import { LinkProps } from "../Link";

type BreadcrumbLink<T extends string> = {
  label: string;
  href: LinkProps<T>["href"];
};

type ArtistBreadCrumbsProps<T extends string> = {
  artistLink: BreadcrumbLink<T>;
  videoTitle?: string;
  links?: BreadcrumbLink<T>[];
};

export function ArtistBreadCrumbs<T extends string>(props: ArtistBreadCrumbsProps<T>) {
  const { artistLink, videoTitle, links } = props;

  return (
    <Breadcrumbs p="lg">
      <Link href="/artists">Artists</Link>
      <Link href={artistLink.href}>{artistLink.label}</Link>
      {videoTitle && <Text>{videoTitle}</Text>}
    </Breadcrumbs>
  );
}
