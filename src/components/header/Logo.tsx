import React, { FC, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './Logo.css';

const Logo: FC = () => {
  const { percent } = useContext(AppContext);

  return (
    <h1 className="Logo" style={{
      opacity: Math.round(percent) / 100,
      transition: 'opacity',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '0.5s',
    }}>
      <div className="Logo-row">
        <div className="Logo-gradient">Piotr</div>
        <div className="Logo-shadow">Piotr</div>
      </div>
      <div className="Logo-row">
        <div className="Logo-gradient">Adamowicz</div>
        <div className="Logo-shadow">Adamowicz</div>
      </div>
    </h1>
  );
};

export default Logo;
