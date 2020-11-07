import { css } from 'styled-components';

const sizes = {
  xs: 420,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1500,
};

const breakpoints = Object.entries(sizes);

function createMinWidths(api, breakpoint) {
  const [bp, size] = breakpoint;
  return {
    ...api,
    [bp]: (...args) => css`
      @media (min-width: ${size}px) {
        ${css(...args)};
      }
    `,
  };
}

const above = breakpoints.reduce(createMinWidths, {});

function createMaxWidths(api, breakpoint) {
  const [bp, size] = breakpoint;
  return {
    ...api,
    [bp]: (...args) => css`
      @media (max-width: ${size - 1}px) {
        ${css(...args)};
      }
    `,
  };
}

const below = breakpoints.reduce(createMaxWidths, {});

export { above, below };
