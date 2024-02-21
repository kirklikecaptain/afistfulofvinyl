"use client";

import { Spotlight, SpotlightActionData } from "@mantine/spotlight";
import { IconHome, IconSearch, IconUsers, IconVideo } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export function SearchModal() {
  const router = useRouter();

  const actions: SpotlightActionData[] = [
    {
      id: "home",
      label: "Home",
      description: "Get to home page",
      onClick: () => router.push("/"),
      leftSection: <IconHome size={14} />,
    },
    {
      id: "artists",
      label: "Artists",
      description: "Get to artists page",
      onClick: () => router.push("/artists"),
      leftSection: <IconUsers size={14} />,
    },
    {
      id: "videos",
      label: "Videos",
      description: "Get to videos page",
      onClick: () => router.push("/"),
      leftSection: <IconVideo size={14} />,
    },
  ];

  return (
    <Spotlight
      actions={actions}
      shortcut={["mod + K", "/"]}
      nothingFound="No results found..."
      highlightQuery
      searchProps={{
        leftSection: <IconSearch />,
        placeholder: "Search by artist or song title...",
      }}
    />
  );
}
