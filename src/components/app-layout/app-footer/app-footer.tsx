import { AccessibleIcon, Container, Flex, Grid, Heading, Separator } from "@radix-ui/themes";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutubeFilled,
  IconMail,
} from "@tabler/icons-react";

import { Link } from "~/components/link";
import { Stack } from "~/components/stack";
import { AFoV } from "~/components/afov";
import { afovSocials, afovAffiliates, afovEmail } from "~/constants/links";

export function AppFooter() {
  return (
    <footer
      style={{
        background: "var(--gray-3)",
        marginTop: "auto",
        padding: "4rem 1rem 2rem 1rem",
        justifySelf: "flex-end",
      }}
    >
      <Container>
        <Grid columns={{ sm: "2", md: "3" }} gap={{ initial: "8", sm: "4" }}>
          {columns.map((column) => (
            <Stack key={column.title} gap="4">
              <Heading as="h2" size="4">
                {column.title}
              </Heading>
              <Stack gap="2" align="start">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          ))}
        </Grid>
        <Separator size="4" my="6" />
        <Flex gap="4" align="center" justify="between">
          <Link href="/" variant="img">
            <AFoV variant="mini" width="70px" />
          </Link>
          <Flex gap="3" align="center">
            {socials.map((social) => (
              <Link key={social.href} href={social.href} variant="img" target="_blank">
                <AccessibleIcon label={social.label}>{social.icon}</AccessibleIcon>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
}

const columns = [
  {
    title: "AFoV",
    links: [
      { label: "About", href: "/about" as const },
      { label: "Contact", href: "/contact" as const },
    ],
  },
  {
    title: "Videos",
    links: [
      { label: "Artists", href: "/artists" as const },
      { label: "Videos", href: "/videos" as const },
      { label: "Interviews", href: "/videos?category=interviews" as const },
    ],
  },
  {
    title: "Friends",
    links: [
      { label: "KXLU 88.9 FM", href: afovAffiliates.kxlu },
      { label: "r/FolkPunk", href: afovAffiliates.reddit.folkPunk },
      { label: "r/ListenToThis", href: afovAffiliates.reddit.listenToThis },
    ],
  },
];

const socials = [
  { label: "Email US", href: `mailto:${afovEmail}` as const, icon: <IconMail /> },
  { label: "AFoV on YouTube", href: afovSocials.youtube, icon: <IconBrandYoutubeFilled /> },
  { label: "AFoV on Instagram", href: afovSocials.instagram, icon: <IconBrandInstagram /> },
  { label: "AFoV on Facebook", href: afovSocials.facebook, icon: <IconBrandFacebook /> },
  { label: "AFoV on X (Twitter)", href: afovSocials.x, icon: <IconBrandX /> },
  { label: "AFoV on KXLU", href: afovSocials.kxlu, icon: <AFoV variant="kxlu" width="20px" /> },
];
