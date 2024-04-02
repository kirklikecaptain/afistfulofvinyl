"use client";

import { Spotlight, SpotlightAction, SpotlightActionData } from "@mantine/spotlight";
import { IconHome, IconSearch, IconUsers, IconVideo } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Route } from "next";
import { useState } from "react";

export type SearchModalProps<T extends string> = {
  data: {
    artists: { name: string; href: Route<T> }[];
    videos: { name: string; href: Route<T> }[];
  };
};

export function SearchModal<T extends string>(props: SearchModalProps<T>) {
  const router = useRouter();

  const [query, setQuery] = useState("");

  const filterByLabel = (label?: string) => label?.toLowerCase().includes(query.toLowerCase());

  const pages: SpotlightActionData[] = [
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
  ];

  const filteredPages = pages.filter(({ label }) => filterByLabel(label));

  const filteredArtists = props.data.artists
    .filter(({ name }) => filterByLabel(name))
    .map((artist) => (
      <SpotlightAction
        key={artist.name}
        id={artist.name}
        label={artist.name}
        onClick={() => router.push(artist.href)}
      />
    ));

  const hasNoResults = filteredPages.length === 0 && filteredArtists.length === 0;

  return (
    <Spotlight.Root
      shortcut={["/", "mod + K"]}
      query={query}
      onQueryChange={setQuery}
      centered
      scrollable
    >
      <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
      {/* Row of buttons instead of list */}
      <Spotlight.ActionsList>
        {query.length === 0 && (
          <Spotlight.ActionsGroup label="Quick Actions">
            {filteredPages.map((page) => (
              <SpotlightAction key={page.id} {...page} />
            ))}
          </Spotlight.ActionsGroup>
        )}
        {query.length > 0 && filteredPages.length > 0 && (
          <Spotlight.ActionsGroup label="Pages">
            {filteredPages.map((page) => (
              <SpotlightAction key={page.id} {...page} />
            ))}
          </Spotlight.ActionsGroup>
        )}
        {query.length > 0 && filteredArtists.length > 0 && (
          <Spotlight.ActionsGroup label="Artists">{filteredArtists}</Spotlight.ActionsGroup>
        )}

        {hasNoResults && <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
      </Spotlight.ActionsList>
    </Spotlight.Root>
  );
}
