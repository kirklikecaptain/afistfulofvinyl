"use client";

import { Box, Container, IconButton } from "@radix-ui/themes";
import { Cross1Icon, HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { IconInfoCircle, IconMail, IconUsers, IconVideo } from "@tabler/icons-react";
import { useState } from "react";
import classnames from "classnames";

import { Link } from "~/components/link";
import { AFoV } from "~/components/afov";

import css from "./app-header.module.css";

export function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <IconButton className={css.menuButton} onClick={toggleMenu} variant="soft" size="3">
            <HamburgerMenuIcon className={classnames({ [css.closed]: menuOpen })} />
            <Cross1Icon className={classnames({ [css.closed]: !menuOpen })} />
          </IconButton>
          <Link href="/" onClick={closeMenu} className={css.logo} variant="img">
            <AFoV />
          </Link>
          <Box className={classnames(css.menu, { [css.closed]: !menuOpen })}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                <span className={css.linkIcon}>{link.icon}</span>
                <span className={css.linkLabel}>{link.label}</span>
              </Link>
            ))}
          </Box>
          <IconButton variant="soft" size="3">
            <MagnifyingGlassIcon />
          </IconButton>
        </nav>
      </Container>
    </header>
  );
}

const links = [
  { label: "Artists", href: "/artists" as const, icon: <IconUsers /> },
  { label: "Videos", href: "/videos" as const, icon: <IconVideo /> },
  { label: "About", href: "/about" as const, icon: <IconInfoCircle /> },
  { label: "Contact", href: "/contact" as const, icon: <IconMail /> },
];
