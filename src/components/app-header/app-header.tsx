import { Flex, Container } from "@radix-ui/themes";

import { Link } from "~/components/link";
import { AFoV } from "~/components/afov";
import { ColorModeButton } from "~/components/color-mode-button";
import { SearchButton } from "~/components/search-button/search-button";

import "./app-header.css";

export function AppHeader() {
  return (
    <header className="app-header">
      <Container>
        <nav>
          <Link href="/" underline="none" className="logo-link">
            <AFoV width="120px" />
          </Link>
          <Flex gap="4" align="center">
            <Link href="/artists" color="gray">
              Artists
            </Link>
            <Link href="/videos" color="gray">
              Videos
            </Link>
            <SearchButton color="gray" />
            <ColorModeButton color="gray" />
          </Flex>
        </nav>
      </Container>
    </header>
  );
}
