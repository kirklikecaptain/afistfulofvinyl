import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { AFoVLogo } from "./AFoVLogo";
import { Link } from "./Link";
import { Button } from "./Button/Button";

export interface NavBarProps {
  height?: BoxProps["height"];
}

export function NavBar(props: NavBarProps) {
  const { height = "auto" } = props;

  return (
    <Box as="header" height={height} position="sticky" top="0" zIndex="sticky">
      <Flex justify="space-between" align="center" padding={4}>
        <Link href="/">
          <AFoVLogo width="120px" />
        </Link>
        <Link href="/artists">Artists</Link>
        <Button>Log In</Button>
      </Flex>
    </Box>
  );
}
