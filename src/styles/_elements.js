import { css } from 'styled-components';

export const elements = css`
  html {
    font-family: var(--font-stack);
    font-size: var(--font-size);
  }

  body {
    background: black;
    color: var(--text-white);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  ul,
  ol,
  li {
    margin-top: 0;
    margin: 1em 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    font-weight: bold;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
