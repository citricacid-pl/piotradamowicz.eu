import React, { useRef, useState, useEffect } from 'react';
import PiotrAdamowiczPicture from '../assets/PiotrAdamowiczPicture.jpg';
import Perspective from '../components/design/Perspective';
import GlobalStyles from '../components/GlobalStyles';
import Logo from '../components/header/Logo';
import Sun from '../components/Sun';
import WindowWatcher from '../components/utils/WindowWatcher';
import { COLORS } from '../constants/colors';
import About from './About';

const Root = () => {
  const measuredRef = useRef<any>(null);
  const [measuredElement, setMeasuredElement] = useState(null);

  useEffect(() => {
    if (!measuredRef?.current) {
      return;
    }
    setTimeout(() => {
      setMeasuredElement(measuredRef?.current);
    }, 0);
  }, [measuredRef, setMeasuredElement]);

  return (
    <div className="App">
      <GlobalStyles />
      <Sun />
      <header className="App-header" ref={measuredRef}>
        <nav>
          Logo, Home, About, Projects, Contact
        </nav>
        <img src={PiotrAdamowiczPicture} className="App-picture" alt="Piotr Adamowicz" />
        <Logo />
        <h1 style={{ color: COLORS.primary, textAlign: 'center' }}><small>JavaScript/TypeScript web and mobile
          developer</small></h1>
      </header>
      <div className="App-content">
        {/* TODO Here will come the <Outlet /> */}
        <About />
      </div>
      <Perspective />
      {measuredElement ? <WindowWatcher element={measuredElement} /> : null}
    </div>
  );
};

export default Root;
