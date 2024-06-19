import { AspectRatio, Box, Card, Text } from "@radix-ui/themes";
import Link from "next/link";

import { LinkProps } from "../link";
import { Image, type ImageProps } from "../image";

import css from "./card-link.module.css";

export type CardLinkProps<T extends string> = {
  title: string | null;
  subtitle?: string | null;
  accentColor?: string | null;
  image?: ImageProps["src"] | null;
  href: LinkProps<T>["href"];
  aspectRatio?: number;
};

export function CardLink<T extends string>(props: CardLinkProps<T>) {
  const { subtitle, image, href } = props;

  const title = props.title ?? "Card Title";
  const accentColor = props.accentColor ?? "#000";
  const aspectRatio = props.aspectRatio ?? 16 / 9;

  return (
    <Card asChild className={css.cardLink} style={{ "--accent-color": accentColor }}>
      <Link href={href}>
        <AspectRatio className={css.frame} ratio={aspectRatio}>
          {image && <Image src={image} alt={title} className={css.thumbnail} fill priority sizes="33vw" />}
          <Box className={css.text}>
            <Text as="p" weight="bold" size="5">
              {title}
            </Text>
            {subtitle && <Text as="p">{subtitle}</Text>}
          </Box>
        </AspectRatio>
      </Link>
    </Card>
  );
}
