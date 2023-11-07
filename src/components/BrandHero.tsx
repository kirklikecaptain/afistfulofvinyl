import { Box, Center } from "~/libs/chakra-ui/react";
import { AFoVLogo } from "./AFoVLogo";

export function BrandHero() {
  const mixBlendMode = "screen";

  return (
    <Center bg="black" height="90svh" as="section">
      <Box position="relative" isolation="isolate" width="60svh">
        <AFoVLogo mixBlendMode={mixBlendMode} color="lightgreen" width="full" />
        <AFoVLogo
          mixBlendMode={mixBlendMode}
          position="absolute"
          top="2px"
          left="2px"
          color="blue"
          width="full"
        />
        <AFoVLogo
          mixBlendMode={mixBlendMode}
          position="absolute"
          top="-2px"
          left="-2px"
          color="red"
          width="full"
        />
      </Box>
    </Center>
  );
}
