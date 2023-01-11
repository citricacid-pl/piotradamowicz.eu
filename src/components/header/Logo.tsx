import React, { FC } from 'react';
import './Logo.css';

const Logo: FC = () => {
  return (
    <h1 className="Logo">
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
