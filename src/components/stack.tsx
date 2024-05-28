import { Flex, type FlexProps } from "@radix-ui/themes";

export function Stack(props: FlexProps) {
  return <Flex direction="column" {...props} />;
}
