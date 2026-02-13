import chroma from 'chroma-js';
import { useMemo } from 'react';

type MaybeColor = string | null | undefined;

function getChromaColor(color: MaybeColor) {
  const validColor = color && chroma.valid(color) ? color : '#000000';
  return chroma(validColor);
}

function getContrastColor(color: chroma.Color) {
  return chroma.contrast(color, 'black') > chroma.contrast(color, 'white') ? '#000000' : '#FFFFFF';
}

function getColorPair(color: chroma.Color) {
  return {
    color: color.hex(),
    contrast: getContrastColor(color),
  };
}

function generateColorScheme(color: MaybeColor) {
  const base = getChromaColor(color);

  const hue = base.get('hsl.h');
  const sat = base.get('hsl.s');

  const lightest = chroma.hsl(hue, sat * 0.5, 0.8);
  const middle = chroma.hsl(hue, sat, 0.5);
  const darkest = chroma.hsl(hue, sat * 0.5, 0.15);

  const scale = chroma.scale([lightest, middle, darkest]).correctLightness();

  return {
    accent: getColorPair(base),
    faint: getColorPair(scale(0)),
    light: getColorPair(scale(0.2)),
    bold: getColorPair(scale(0.5)),
    shade: getColorPair(scale(0.8)),
    dark: getColorPair(scale(1)),
  };
}

export function useArtistColors(accentColor: MaybeColor) {
  return useMemo(() => generateColorScheme(accentColor), [accentColor]);
}
