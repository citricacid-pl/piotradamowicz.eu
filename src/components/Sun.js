import { useContext } from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants/colors';
import { AppContext } from '../context/AppContext';

// const size = '40vmin';
const size = '40vh';

const SunCircle = styled.div`
  background: ${COLORS.secondary};
  background: linear-gradient(180deg, ${COLORS.secondary} 0, ${COLORS.secondary} 30%, ${COLORS.secondary2} 50%, rgba(220, 160, 0, 0) 65%);
  width: ${size};
  height: ${size};
  margin: auto;
  border-radius: 50%;
  box-shadow: 0 0 30px 10px ${COLORS.secondary2};
`;

// const SunPart = ({ size = 100, offset = 0 }) => {
//   return (
//     <div style={{
//       position: 'relative',
//       height: size + '%',
//       overflow: 'hidden',
//       // top: `-${offset}px`,
//       // marginTop: offset,
//       // opacity: 0.5,
//       margin: 'auto',
//     }}>
//       <div style={{ position: 'absolute', top: `-${offset}px`, overflow: 'hidden' }}>
//         <SunCircle />
//       </div>
//     </div>
//   );
// };

const Sun = () => {
  const { percent } = useContext(AppContext);

  return (
    <div style={{
      height: size,
      position: 'fixed',
      top: `calc(60vh - (${size} / 1.5))`,
      left: `calc(50vw - (${size} / 2))`,
      opacity: Math.round(percent) / 100,
      transition: 'opacity',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '0.5s',
    }}>
      <SunCircle />
    </div>
  );
};

export default Sun;
