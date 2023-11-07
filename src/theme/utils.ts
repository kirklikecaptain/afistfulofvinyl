import Color from "color";

export function getArtistColors(artistColor?: string | null) {
  const hue = Color(artistColor || "#000000").hue();
  const scheme = {
    darkest: Color({ h: hue, s: 50, l: 20 }).hex(),
    dark: Color({ h: hue, s: 50, l: 30 }).hex(),
    mid: Color({ h: hue, s: 50, l: 50 }).hex(),
    light: Color({ h: hue, s: 50, l: 70 }).hex(),
    lightest: Color({ h: hue, s: 50, l: 80 }).hex(),
  };

  return scheme;
}
