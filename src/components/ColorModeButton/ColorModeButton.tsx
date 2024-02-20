import { useMantineColorScheme, useComputedColorScheme } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

import { IconButton, type IconButtonProps } from "../IconButton";

export interface ColorModeButtonProps extends Omit<IconButtonProps, "label" | "onClick" | "icon"> {}

export function ColorModeButton({ variant, size }: ColorModeButtonProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", { getInitialValueInEffect: true });
  const toggleScheme = () => setColorScheme(computedColorScheme === "light" ? "dark" : "light");

  return (
    <>
      <IconButton
        label="Toggle Light Mode"
        className="hide-from-light"
        variant={variant}
        size={size}
        onClick={toggleScheme}
        icon={IconSun}
      />
      <IconButton
        label="Toggle Dark Mode"
        className="hide-from-dark"
        variant={variant}
        size={size}
        onClick={toggleScheme}
        icon={IconMoon}
      />
    </>
  );
}
