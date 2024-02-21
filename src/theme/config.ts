import { createTheme } from "@mantine/core";

export const breakpoints = {
  xs: "36em",
  sm: "48em",
  md: "62em",
  lg: "75em",
  xl: "88em",
};

export const theme = createTheme({
  breakpoints,
  primaryColor: "indigo",
});
