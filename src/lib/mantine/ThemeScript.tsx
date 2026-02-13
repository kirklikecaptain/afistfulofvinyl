import { ColorSchemeScript } from '@mantine/core';

import { DEFAULT_COLOR_SCHEME } from './theme.constants';

export function ThemeScript() {
  return <ColorSchemeScript defaultColorScheme={DEFAULT_COLOR_SCHEME} />;
}
