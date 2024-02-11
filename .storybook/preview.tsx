import "@mantine/core/styles.css";
import React, { useEffect } from "react";
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import { MantineProvider, useMantineColorScheme } from "@mantine/core";

import { theme } from "../src/components/theme";

const channel = addons.getChannel();

function ColorSchemeWrapper({ children }: React.PropsWithChildren) {
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    const handleColorScheme = (value: boolean) => setColorScheme(value ? "dark" : "light");
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);

    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [setColorScheme]);

  return <>{children}</>;
}

export const decorators = [
  (Story: any) => (
    <MantineProvider theme={theme}>
      <ColorSchemeWrapper>
        <Story />
      </ColorSchemeWrapper>
    </MantineProvider>
  ),
];
