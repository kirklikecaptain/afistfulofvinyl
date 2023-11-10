import Color from "color";
import { Artist } from "~/api/__generated__/graphql";

export function createArtistColorsScheme(artistColor?: Artist["accentColor"]) {
  const h = Color(artistColor || "#000000").hue();

  return {
    darkest: Color({ h, s: 50, l: 20 }).hex(),
    dark: Color({ h, s: 50, l: 30 }).hex(),
    mid: Color({ h, s: 60, l: 50 }).hex(),
    light: Color({ h, s: 50, l: 70 }).hex(),
    lightest: Color({ h, s: 50, l: 80 }).hex(),
  };
}
