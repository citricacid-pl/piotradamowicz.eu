import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="Navigation-container">
      <nav className="Navigation">
        <div>Piotr Adamowicz</div>
        <ul className="Navigation-links">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
