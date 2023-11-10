import { Box, Heading } from "~/libs/chakra-ui/react";
import { PropsWithChildren } from "react";

interface VideoCardListProps extends PropsWithChildren {
  heading: string;
}

export function VideoCardList({ heading, children }: VideoCardListProps) {
  return (
    <Box as="section">
      <Heading>{heading}</Heading>
      <Box>{children}</Box>
    </Box>
  );
}
