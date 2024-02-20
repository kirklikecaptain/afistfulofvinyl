import { Box, type BoxProps } from "@mantine/core";

import { variants } from "./AFoVLogo.utils";

export interface AFoVLogoProps extends BoxProps {
  variant?: "primary" | "square" | "mini";
}

export function AFoVLogo(props: AFoVLogoProps) {
  const {
    variant = "primary",
    display = "inline-block",
    c = "bright",
    lh = 0,
    ...boxProps
  } = props;

  const { viewBox, d } = variants[variant];

  return (
    <Box lh={lh} c={c} {...boxProps}>
      <svg viewBox={viewBox} width="100%" aria-label="A Fistful of Vinyl">
        <path fill="currentColor" d={d} />
      </svg>
    </Box>
  );
}
