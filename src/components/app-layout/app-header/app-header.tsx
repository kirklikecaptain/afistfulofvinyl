"use client";

import { Box, Container, IconButton } from "@radix-ui/themes";
import { Cross1Icon, HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { IconInfoCircle, IconMail, IconUsers, IconVideo } from "@tabler/icons-react";
import { useBoolean } from "usehooks-ts";
import classnames from "classnames";

import { Link } from "~/components/link";
import { AFoV } from "~/components/afov";

import css from "./app-header.module.css";

export function AppHeader() {
  const { value: menuOpen, setFalse: closeMenu, toggle: toggleMenu } = useBoolean(false);

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
  { label: "Artists", href: "/artists" as const, icon: <IconUsers size={16} /> },
  { label: "Videos", href: "/videos" as const, icon: <IconVideo size={16} /> },
  { label: "About", href: "/about" as const, icon: <IconInfoCircle size={16} /> },
  { label: "Contact", href: "/contact" as const, icon: <IconMail size={16} /> },
];
