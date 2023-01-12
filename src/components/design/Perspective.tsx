import { FC } from 'react';
import './Perspective.css';

const Perspective: FC = () => {
  return (
    <div className="Perspective">
      <div className="Perspective-world">
        <div className="Perspective-item">
          <div className="Perspective-mask"></div>
        </div>
      </div>
    </div>
  );
};

export default Perspective;
