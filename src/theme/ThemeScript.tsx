import { ColorSchemeScript } from '@mantine/core';
import { defaultColorScheme } from './constants';

export function ThemeScript() {
  return <ColorSchemeScript defaultColorScheme={defaultColorScheme} />;
}
