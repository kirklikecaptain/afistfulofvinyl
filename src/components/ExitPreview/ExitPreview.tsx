"use client";

import { Button } from "@mantine/core";
import { IconEyeOff } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export function ExitPreview() {
  const currentPath = usePathname();
  const linkTo = `/preview/exit?redirect=${currentPath}`;

  return (
    <Button
      href={linkTo}
      component="a"
      pos="fixed"
      bottom={16}
      right={16}
      leftSection={<IconEyeOff size={14} />}
    >
      Exit Preview Mode
    </Button>
  );
}
