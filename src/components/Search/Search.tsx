"use client";

import { rem } from "@mantine/core";
import { Spotlight, SpotlightActionData } from "@mantine/spotlight";
import { IconHome, IconSearch } from "@tabler/icons-react";

const actions: SpotlightActionData[] = [
  {
    id: "home",
    label: "Home",
    description: "Get to home page",
    onClick: () => console.log("Home"),
    leftSection: <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
];

export function Search() {
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
