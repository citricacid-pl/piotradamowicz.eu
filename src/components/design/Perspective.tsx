import { FC, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import './Perspective.css';

const Perspective: FC = () => {
  const { percent } = useContext(AppContext);
  const [minPercent, setMinPercent] = useState(30);

  useEffect(() => {
    if (percent < 30) {
      setMinPercent(30);
    } else {
      setMinPercent(percent);
    }
  }, [percent]);

  return (
    <div className="Perspective">
      <div className="Perspective-world" style={{
        opacity: Math.round(minPercent) / 100,
        transition: 'opacity',
        transitionTimingFunction: 'ease-out',
        transitionDuration: '0.5s',
      }}>
        <div className="Perspective-item">
          <div className="Perspective-mask"></div>
        </div>
      </div>
    </div>
  );
};

export default Perspective;
