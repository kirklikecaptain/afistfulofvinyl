import { Box, type BoxProps } from '@mantine/core';
import { afovSvgData } from './AFoVLogo.utils';

export type AFoVLogoProps = BoxProps & {
  variant?: keyof typeof afovSvgData;
};

export function AFoVLogo(props: AFoVLogoProps) {
  const { variant = 'full', w, ...boxProps } = props;

  const { viewBox, path } = afovSvgData[variant];

  return (
    <Box w={w} {...boxProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        focusable={false}
        role="img"
        aria-label="A Fistful of Vinyl logo"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          fill: 'currentColor',
        }}
      >
        <path d={path} />
      </svg>
    </Box>
  );
}
