import { CardSection, Center, Title } from "@mantine/core";

import { Image } from "~/components";

import { LinkCard, type LinkCardProps } from "../LinkCard";

export type ArtistCardProps<T extends string> = LinkCardProps<T> & {
  name: string;
  artistColor?: string;
  photoSrc?: string;
};

export function ArtistCard<T extends string>(props: ArtistCardProps<T>) {
  const { name, artistColor, photoSrc, href } = props;

  return (
    <LinkCard href={href}>
      <CardSection p="lg" bg={`linear-gradient(to bottom, ${artistColor} 50%, transparent 50%)`}>
        <Center>
          <Image
            src={photoSrc || "/images/placeholder-headshot.svg"}
            alt={name}
            aspectRatio="1:1"
            maxWidth={120}
            style={{ borderRadius: "100%" }}
          />
        </Center>
      </CardSection>
      <Title order={2} ta="center">
        {name}
      </Title>
    </LinkCard>
  );
}
