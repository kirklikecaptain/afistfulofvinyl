import chroma from 'chroma-js';
import { useMemo } from 'react';

type MaybeColor = string | null | undefined;

function generateColorScheme(color: MaybeColor) {
  const base = color && chroma.valid(color) ? chroma(color) : chroma('#000000');

  const hue = base.get('hsl.h');
  const sat = base.get('hsl.s');

  const lightest = chroma.hsl(hue, sat / 1.5, 0.87).hex();
  const middle = chroma.hsl(hue, sat, 0.5).hex();
  const darkest = chroma.hsl(hue, sat / 1.5, 0.15).hex();

  const scale = chroma.scale([lightest, middle, darkest]).correctLightness().colors(5);

  return {
    primary: base.hex(),
    primaryContrast: base.luminance() > 0.5 ? darkest : lightest,
    luminance: base.luminance(),
    lightest: scale[0],
    light: scale[1],
    mid: scale[2],
    dark: scale[3],
    darkest: scale[4],
    scale,
  };
}

export function useArtistColors(accentColor: MaybeColor) {
  return useMemo(() => generateColorScheme(accentColor), [accentColor]);
}
