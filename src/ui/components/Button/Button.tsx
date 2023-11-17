import { Button as ChakraButton, ButtonProps } from "~/ui/chakra/react";

export function Button(props: ButtonProps) {
  // const { children, ...rest } = props;

  return <ChakraButton {...props} />;
}
