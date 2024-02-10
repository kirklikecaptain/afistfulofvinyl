"use client";

import { Button } from "@mantine/core";
import { usePathname } from "next/navigation";

export function ExitPreviewMode() {
  const currentPath = usePathname();
  const newPath = `/preview/exit?redirect=${currentPath}`;

  return (
    <Button component="a" href={newPath} pos="fixed" bottom={16} right={16}>
      Exit Preview Mode
    </Button>
  );
}
