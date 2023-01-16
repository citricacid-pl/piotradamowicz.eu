import React, { useState, useCallback } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import './Navigation.css';

const Navigation = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = useCallback(
    () => {
      setMenuOpened(prevState => !prevState);
    }, [setMenuOpened],
  );

  return (
    <div className="Navigation-container">
      <nav className="Navigation">
        <div>Piotr Adamowicz</div>
        <ul className={menuOpened ? 'Navigation-links Navigation-links_opened' : 'Navigation-links'}>
          <li className="Navigation-close" onClick={toggleMenu}><IoClose /></li>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div className="Navigation-open" onClick={toggleMenu}><IoMenu /></div>
      </nav>
    </div>
  );
};

export default Navigation;
