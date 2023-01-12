import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

const GlobalStyles = createGlobalStyle`
  html {
    --max-content-size: 1000px;
    --primary-color: ${COLORS.primary};
    --primary2-color: ${COLORS.primary2};
    --primary3-color: ${COLORS.primary3};
    --secondary-color: ${COLORS.secondary};
    background: ${COLORS.primary};
  }

  body {
    background: linear-gradient(180deg, ${COLORS.primary} 0%, ${COLORS.primary2} 20%, ${COLORS.primary3} 58%, ${COLORS.primary} 60%) no-repeat;
    height: 100vh;
    color: ${COLORS.text};
  }
  
  a {
    color: ${COLORS.secondary2};
  }
  a:hover {
    color: ${COLORS.secondary};
  }
  a:visited {
    color: ${COLORS.primary3};
  }
`;

export default GlobalStyles;
