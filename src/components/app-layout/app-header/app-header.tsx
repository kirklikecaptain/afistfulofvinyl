import { Flex, Container } from "@radix-ui/themes";

import { Link } from "~/components/link";
import { AFoV } from "~/components/afov";
import { ColorModeButton } from "~/components/color-mode-button";
import { SearchButton } from "~/components/search-button/search-button";

import css from "./app-header.module.css";

export function AppHeader() {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <Link href="/" variant="img">
            <AFoV width="120px" />
          </Link>
          <Flex gap="4" align="center">
            <Link href="/artists" color="gray">
              Artists
            </Link>
            <Link href="/videos" color="gray">
              Videos
            </Link>
            <Link href="/about" color="gray">
              About
            </Link>
            <Link href="/contact" color="gray">
              Contact
            </Link>
            <SearchButton color="gray" />
            <ColorModeButton color="gray" />
          </Flex>
        </nav>
      </Container>
    </header>
  );
}
