import { Box, type BoxProps } from "@mantine/core";

export interface SectionProps extends BoxProps {
  children: React.ReactNode;
}

export function Section(props: SectionProps) {
  return <Box component="section" p="md" {...props} />;
}
