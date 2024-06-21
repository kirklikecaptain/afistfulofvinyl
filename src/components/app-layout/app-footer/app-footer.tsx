import { AccessibleIcon, Box, Container, Flex, Grid, Heading, Section } from "@radix-ui/themes";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconBrandYoutubeFilled,
  IconMail,
} from "@tabler/icons-react";

import { Link, Stack } from "~/components";
import { AFoV } from "~/components/afov";
import { afovLinks } from "~/utils/afov-links";

export function AppFooter() {
  return (
    <Section asChild px="4" style={{ background: "var(--gray-3)" }}>
      <footer>
        <Container>
          <Grid columns={{ sm: "2", md: "4" }} gap={{ initial: "8", sm: "4" }}>
            <Stack gap="4">
              <Heading as="h2" size="4">
                A Fistful of Vinyl
              </Heading>
              <Stack gap="2" align="start">
                <Link color="gray" href="/about">
                  About
                </Link>
                <Link color="gray" href="/contact">
                  Contact
                </Link>
              </Stack>
            </Stack>
            <Stack gap="4">
              <Heading as="h2" size="4">
                Content
              </Heading>
              <Stack gap="2" align="start">
                <Link color="gray" href="/artists">
                  Artists
                </Link>
                <Link color="gray" href="/videos">
                  Videos
                </Link>
                <Link color="gray" href="/videos?category=interviews">
                  Interviews
                </Link>
              </Stack>
            </Stack>
            <Stack gap="4">
              <Heading as="h2" size="4">
                Affiliates
              </Heading>
              <Stack gap="2" align="start">
                <Link color="gray" href={afovLinks.affiliates.kxlu}>
                  KXLU Los Angeles
                </Link>
              </Stack>
            </Stack>
            <Stack
              gap="4"
              align={{ md: "end", sm: "start", initial: "center" }}
              justify={{ md: "end", sm: "start", initial: "center" }}
            >
              <Link href="/" variant="img">
                <AFoV variant="mini" width="70px" />
              </Link>
              <Flex gap="2" align="center">
                <Link target="_blank" href={afovLinks.youtube} variant="img">
                  <AccessibleIcon label="YouTube">
                    <IconBrandYoutubeFilled />
                  </AccessibleIcon>
                </Link>
                <Link target="_blank" href={afovLinks.instagram} variant="img">
                  <AccessibleIcon label="Instagram">
                    <IconBrandInstagram />
                  </AccessibleIcon>
                </Link>
                <Link target="_blank" href={afovLinks.instagram} variant="img">
                  <AccessibleIcon label="Facebook">
                    <IconBrandFacebook />
                  </AccessibleIcon>
                </Link>
                <Link target="_blank" href={afovLinks.x} variant="img">
                  <AccessibleIcon label="X (Twitter)">
                    <IconBrandX />
                  </AccessibleIcon>
                </Link>
                <Link target="_blank" href={afovLinks.email} variant="img">
                  <AccessibleIcon label="Email">
                    <IconMail />
                  </AccessibleIcon>
                </Link>
                <Link target="_blank" href={afovLinks.kxlu} variant="img">
                  <AccessibleIcon label="KXLU">
                    <AFoV variant="kxlu" width="20px" />
                  </AccessibleIcon>
                </Link>
              </Flex>
            </Stack>
          </Grid>
        </Container>
      </footer>
    </Section>
  );
}
