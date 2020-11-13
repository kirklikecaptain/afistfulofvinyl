import { css } from 'styled-components';

export const utilities = css`
  .Secondary {
    color: var(--text-white-secondary);
  }

  .Light {
    background: white;
    color: var(--text-black);

    .Secondary {
      color: var(--text-black-secondary);
    }
  }

  .Section {
    padding: var(--padding);
  }

  .Container {
    max-width: var(--width-xl);
    margin: auto;
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
`;
