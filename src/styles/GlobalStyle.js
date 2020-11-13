import { createGlobalStyle } from 'styled-components';
import { variables } from './_variables';
import { normalize } from './_normalize';
import { fonts } from './_fonts';
import { elements } from './_elements';
import { utilities } from './_utilities';

const GlobalStyle = createGlobalStyle`
  ${variables}
  ${normalize}
  ${fonts}
  ${elements}
  ${utilities}
`;

export default GlobalStyle;
