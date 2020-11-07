import { createGlobalStyle } from 'styled-components';

import inter400woff from '../fonts/Inter-3.15/Inter-Regular.woff';
import inter400woff2 from '../fonts/Inter-3.15/Inter-Regular.woff2';
import inter400iwoff from '../fonts/Inter-3.15/Inter-Italic.woff';
import inter400iwoff2 from '../fonts/Inter-3.15/Inter-Italic.woff2';
import inter600woff from '../fonts/Inter-3.15/Inter-SemiBold.woff';
import inter600woff2 from '../fonts/Inter-3.15/Inter-SemiBold.woff2';
import inter600iwoff from '../fonts/Inter-3.15/Inter-SemiBoldItalic.woff';
import inter600iwoff2 from '../fonts/Inter-3.15/Inter-SemiBoldItalic.woff2';
import inter800woff from '../fonts/Inter-3.15/Inter-ExtraBold.woff';
import inter800woff2 from '../fonts/Inter-3.15/Inter-ExtraBold.woff2';
import inter800iwoff from '../fonts/Inter-3.15/Inter-ExtraBoldItalic.woff';
import inter800iwoff2 from '../fonts/Inter-3.15/Inter-ExtraBoldItalic.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-display: swap;
    src: local('Inter-Regular'),
      url(${inter400woff2}) format('woff2'),
      url(${inter400woff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    font-display: swap;
    src: local('Inter-Italic'),
      url(${inter400iwoff2}) format('woff2'),
      url(${inter400iwoff}) format('woff');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    font-display: swap;
    src: local('Inter-SemiBold'),
      url(${inter600woff2}) format('woff2'),
      url(${inter600woff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    font-display: swap;
    src: local('Inter-SemiBoldItalic'),
      url(${inter600iwoff2}) format('woff2'),
      url(${inter600iwoff}) format('woff');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    font-display: swap;
    src: local('Inter-ExtraBold'),
      url(${inter800woff2}) format('woff2'),
      url(${inter800woff}) format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    font-display: swap;
    src: local('Inter-ExtraBoldItalic'),
      url(${inter800iwoff2}) format('woff2'),
      url(${inter800iwoff}) format('woff');
    font-weight: 800;
    font-style: italic;
  }
`;
