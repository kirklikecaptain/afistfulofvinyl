"use client";

import { Button } from "@mantine/core";
import { IconEyeOff } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

import { Link } from "~/components";

export function ExitPreview() {
  const currentPath = usePathname();
  const linkTo = {
    pathname: "/api/preview/exit",
    query: { redirect: currentPath },
  };

  return (
    <Button
      href={linkTo}
      component={Link}
      pos="fixed"
      underline="never"
      bottom={16}
      right={16}
      leftSection={<IconEyeOff size={14} />}
    >
      Exit Preview Mode
    </Button>
  );
}
