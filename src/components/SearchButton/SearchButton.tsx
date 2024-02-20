import { spotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";

import { IconButton, type IconButtonProps } from "../IconButton";

interface SearchButtonProps extends Omit<IconButtonProps, "label" | "onClick" | "icon"> {}

export function SearchButton(props: SearchButtonProps) {
  return <IconButton label="Search" onClick={spotlight.open} icon={IconSearch} {...props} />;
}
