"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu, VisuallyHidden } from "@radix-ui/themes";
import { useTheme } from "next-themes";

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          <MoonIcon className="dark-only" />
          <SunIcon className="light-only" />
          <VisuallyHidden>Toggle Color Mode</VisuallyHidden>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.RadioGroup value={theme} onValueChange={(value) => setTheme(value)}>
          <DropdownMenu.RadioItem value="dark">Dark Mode</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="light">Light Mode</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
