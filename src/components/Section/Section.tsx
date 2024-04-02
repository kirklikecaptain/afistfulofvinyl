import { Box, type BoxProps } from "@mantine/core";

export type SectionProps = BoxProps & {
  children: React.ReactNode;
};

export function Section(props: SectionProps) {
  return <Box component="section" p="xl" {...props} />;
}
