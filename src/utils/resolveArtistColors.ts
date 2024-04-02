export function resolveArtistColors(accentColor: string = "#d91111") {
  const colors = {
    base: accentColor,
    tint: `hsl(${accentColor} h 60% 90%)`,
    light: `hsl(${accentColor} h 60% 75%)`,
    bold: `hsl(${accentColor} h 85% 50%)`,
    dark: `hsl(${accentColor} h 60% 25%)`,
    shade: `hsl(${accentColor} h 60% 10%)`,
  };

  const cssVars = {
    "--artist-color": colors.base,
    "--artist-color-tint": colors.tint,
    "--artist-color-light": colors.light,
    "--artist-color-bold": colors.bold,
    "--artist-color-dark": colors.dark,
    "--artist-color-shade": colors.shade,
  } as React.CSSProperties;

  return { colors, cssVars };
}
