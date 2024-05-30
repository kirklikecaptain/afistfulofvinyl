import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { IconButton, type IconButtonProps } from "@radix-ui/themes";

export function SearchButton(props: IconButtonProps) {
  const { color = "gray", variant = "soft", ...rest } = props;

  return (
    <IconButton color={color} variant={variant} {...rest}>
      <MagnifyingGlassIcon />
    </IconButton>
  );
}
