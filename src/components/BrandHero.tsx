import { Box, Center } from "~/libs/chakra-ui/react";
import { AFoVLogo } from "./AFoVLogo";

export function BrandHero() {
  return (
    <Center bg="blackAlpha.800" height="90svh" as="section">
      <AFoVLogo color="white" width="60svh" />
    </Center>
  );
}
