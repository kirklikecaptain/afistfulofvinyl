import { css } from 'styled-components';

export const variables = css`
  :root {
    --font-size: 14px; /* 1 rem */
    --font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-stack-mono: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
      Courier, monospace;

    --text-white: rgba(255, 255, 255, 0.85);
    --text-white-secondary: rgba(255, 255, 255, 0.55);
    --text-black: rgba(0, 0, 0, 0.85);
    --text-black-secondary: rgba(0, 0, 0, 0.55);

    --padding: 1em;

    --width-md: 500px;
    --width-lg: 900px;
    --width-xl: 1300px;
  }

  @media (min-width: var(--width-md)) {
    --padding: 2em;
  }

  @media (min-width: var(--width-lg)) {
    --padding: 4em;
  }

  @media (min-width: var(--width-xl)) {
    --padding: 6em;
  }
`;
