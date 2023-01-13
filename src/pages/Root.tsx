import React, { useRef, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import PiotrAdamowiczPicture from '../assets/PiotrAdamowiczPicture.jpg';
import Perspective from '../components/design/Perspective';
import GlobalStyles from '../components/GlobalStyles';
import Logo from '../components/header/Logo';
import Navigation from '../components/header/Navigation';
import Sun from '../components/Sun';
import WindowWatcher from '../components/utils/WindowWatcher';
import { COLORS } from '../constants/colors';

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
      <Navigation />
      <header className="App-header" ref={measuredRef}>
        <img src={PiotrAdamowiczPicture} className="App-picture" alt="Piotr Adamowicz" />
        <Logo />
        <h1 style={{ color: COLORS.primary, textAlign: 'center' }}><small>JavaScript/TypeScript web and mobile
          developer</small></h1>
      </header>
      <div className="App-content">
        <Outlet />
      </div>
      <Perspective />
      {measuredElement ? <WindowWatcher element={measuredElement} /> : null}
    </div>
  );
};

export default Root;
