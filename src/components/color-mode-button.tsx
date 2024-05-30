"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton, DropdownMenu, VisuallyHidden, type IconButtonProps } from "@radix-ui/themes";
import { useTheme } from "next-themes";

export type ColorModeButtonProps = {
  color?: IconButtonProps["color"];
  variant?: IconButtonProps["variant"];
};

export function ColorModeButton(props: ColorModeButtonProps) {
  const { color, variant = "soft" } = props;
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton variant={variant} color={color}>
          <MoonIcon className="visible-dark" />
          <SunIcon className="visible-light" />
          <VisuallyHidden>Toggle Color Mode</VisuallyHidden>
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="soft">
        <DropdownMenu.RadioGroup value={theme} onValueChange={(value) => setTheme(value)}>
          <DropdownMenu.RadioItem value="dark">Dark Mode</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="light">Light Mode</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
