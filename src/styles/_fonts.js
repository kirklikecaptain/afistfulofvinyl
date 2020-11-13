import { css } from 'styled-components';
import robotoSlab700woff from '../fonts/roboto-slab/roboto-slab-v12-latin-700.woff';
import robotoSlab700woff2 from '../fonts/roboto-slab/roboto-slab-v12-latin-700.woff2';

export const fonts = css`
  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto Slab Bold'), url(${robotoSlab700woff2}) format('woff2'),
      url(${robotoSlab700woff}) format('woff');
  }

  .Slab {
    font-family: 'Roboto Slab';
  }
`;
