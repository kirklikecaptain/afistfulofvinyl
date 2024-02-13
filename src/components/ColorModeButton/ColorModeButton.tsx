import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Tooltip } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

import css from "./ColorModeButton.module.css";

export function ColorModeButton() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  const toggleScheme = () => setColorScheme(computedColorScheme === "light" ? "dark" : "light");

  return (
    <>
      <Tooltip
        events={{ hover: true, focus: true, touch: false }}
        withArrow
        label="Toggle Light Mode"
        className={css.light}
      >
        <ActionIcon onClick={toggleScheme} variant="default" aria-label="Toggle color mode">
          <IconSun size="65%" />
        </ActionIcon>
      </Tooltip>
      <Tooltip
        events={{ hover: true, focus: true, touch: false }}
        withArrow
        label="Toggle Dark Mode"
        className={css.dark}
      >
        <ActionIcon onClick={toggleScheme} variant="default">
          <IconMoon size="65%" />
        </ActionIcon>
      </Tooltip>
    </>
  );
}
