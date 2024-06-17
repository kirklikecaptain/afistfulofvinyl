import { AspectRatio, Box, Card, Text } from "@radix-ui/themes";
import Link from "next/link";

import { LinkProps } from "../link";
import { Image, type ImageProps } from "../image";
import "./card-link.css";

export type CardLinkProps<T extends string> = {
  title: string;
  subtitle?: string;
  href: LinkProps<T>["href"];
  accentColor?: string;
  image: ImageProps["src"] | undefined;
  aspectRatio?: number;
  hideArtistName?: boolean;
};

export function CardLink<T extends string>(props: CardLinkProps<T>) {
  const { title, subtitle, accentColor = "#000", image, href, aspectRatio = 16 / 9 } = props;

  return (
    <Card asChild className="card-link" style={{ "--color": accentColor }}>
      <Link href={href}>
        <AspectRatio className="frame" ratio={aspectRatio}>
          {image && <Image src={image} alt={title} fill priority sizes="33vw" />}
          <Box className="text">
            {title && (
              <Text as="p" weight="bold">
                {title}
              </Text>
            )}
            {subtitle && (
              <Text as="p" className="subtitle">
                {subtitle}
              </Text>
            )}
          </Box>
        </AspectRatio>
      </Link>
    </Card>
  );
}
