import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

const GlobalStyles = createGlobalStyle`
  html {
    --primary-color: ${COLORS.primary};
    --primary2-color: ${COLORS.primary2};
    --primary3-color: ${COLORS.primary3};
    --secondary-color: ${COLORS.secondary};
  }
  body {
    background: ${COLORS.primary};
    background: linear-gradient(180deg, ${COLORS.primary} 0%, ${COLORS.primary2} 20%, ${COLORS.primary3} 58%, ${COLORS.primary} 60%);
    background-repeat: no-repeat;
    height: 100vh;
    color: ${COLORS.text};
  }
`;

export default GlobalStyles;
