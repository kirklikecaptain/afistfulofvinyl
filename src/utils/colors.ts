export function resolveArtistColors(color: string = "#000") {
  const colors = {
    base: color,
    tint: `hsl(${color} h 60% 90%)`,
    light: `hsl(${color} h 60% 75%)`,
    bold: `hsl(${color} h 85% 50%)`,
    dark: `hsl(${color} h 60% 25%)`,
    shade: `hsl(${color} h 60% 10%)`,
  };

  const cssVars = {
    "--artist-color-base": colors.base,
    "--artist-color-tint": colors.tint,
    "--artist-color-light": colors.light,
    "--artist-color-bold": colors.bold,
    "--artist-color-dark": colors.dark,
    "--artist-color-shade": colors.shade,
  } as React.CSSProperties;

  return { colors, cssVars };
}
