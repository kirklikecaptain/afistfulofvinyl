"use client";

import { Spotlight, SpotlightActionData, SpotlightActionGroupData } from "@mantine/spotlight";
import { IconHome, IconSearch, IconUsers, IconVideo } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Route } from "next";
import { useState } from "react";

export type SearchModalProps<T extends string> = {
  artists: {
    name: string;
    href: Route<T>;
  }[];
  videos: unknown;
};

export function SearchModal<T extends string>(props: SearchModalProps<T>) {
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
      onClick: () => router.push("/videos"),
      leftSection: <IconVideo size={14} />,
    },
    ...props.artists.map((artist) => ({
      id: artist.name,
      label: artist.name,
      onClick: () => router.push(artist.href),
      highlightColor: "green",
    })),
  ];

  return (
    <Spotlight
      actions={actions}
      shortcut={["mod + K", "/"]}
      nothingFound="No results found..."
      limit={3}
      // highlightQuery
      scrollable
      maxHeight={500}
      searchProps={{
        leftSection: <IconSearch />,
        placeholder: "Search by artist or song title...",
      }}
    />
  );
}
