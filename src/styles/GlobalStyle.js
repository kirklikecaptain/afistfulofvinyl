import { createGlobalStyle } from 'styled-components';
import { above } from './breakpoints';

const GlobalStyle = createGlobalStyle`
  :root {
    --some-var: red;
  }

  h1 {
    line-height: 1.23;
  }

  h2, h3 {
    line-height: 1.35;
  }

  h4 {
    line-height: 1.4;
  }

  h5, h6 {
    line-height: 1.5;
  }

  .Container {
    max-width: 1300px;
    margin: auto;
  }

  .Section-Padding {
    padding: 1rem 0;
    ${above.xs`
      padding: 2rem 0;
    `}
    ${above.md`
      padding: 3rem 0;
    `}
    ${above.lg`
      padding: 4rem 0;
    `}
  }

  .Block-Link,
  .Block-Link:hover,
  .Block-Link:visited,
  .Block-Link:focus,
  .Block-Link:active {
    display: block;
    font-weight: inherit;
    text-decoration: none;
    color: inherit;
    outline: 0;
  }

  .ant-popover-title {
    border-bottom: 1px solid rgba(255,255,255, .15);
  }
`;

export default GlobalStyle;
