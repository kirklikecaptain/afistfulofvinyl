import { ActionIcon } from "@mantine/core";
import { spotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";

export function SearchButton() {
  const openSpotlight = () => spotlight.open();

  return (
    <ActionIcon onClick={openSpotlight} aria-label="Search" variant="default">
      <IconSearch size="65%" />
    </ActionIcon>
  );
}
