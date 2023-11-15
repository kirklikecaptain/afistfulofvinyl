import { Box } from "~/components/chakra-ui/react";
import { NavBar, type NavBarProps } from "./NavBar";
import { Footer } from "./Footer";
import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  _navbar?: NavBarProps;
}

export function Layout(props: LayoutProps) {
  const { _navbar, children } = props;

  return (
    <Box>
      <NavBar {..._navbar} />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
}
