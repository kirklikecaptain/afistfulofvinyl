"use client";

import { Button } from "@mantine/core";
import { IconEyeOff } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export type ExitPreviewProps = {
  enabled: boolean;
};

export function ExitPreviewButton({ enabled }: ExitPreviewProps) {
  const currentPath = usePathname();
  const linkTo = `/api/preview/exit?redirect=${currentPath}`;

  if (!enabled) return null;

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
