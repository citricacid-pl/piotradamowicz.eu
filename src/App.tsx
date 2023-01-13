import { useRef, useEffect, useState } from 'react';
import './App.css';
import PiotrAdamowiczPicture from './assets/PiotrAdamowiczPicture.jpg';
import Perspective from './components/design/Perspective';
import GlobalStyles from './components/GlobalStyles';
import Logo from './components/header/Logo';
import PageSection from './components/PageSection';
import Sun from './components/Sun';
import { COLORS } from './constants/colors';
import ScrollWatchContextProvider from './context/ScrollWatchContext';
import WindowWatcher from './components/utils/WindowWatcher';

function App() {
  const contentRef = useRef<any>(null);
  const [el, setEl] = useState(null);

  useEffect(() => {
    if (!contentRef?.current) {
      return;
    }
    setTimeout(() => {
      setEl(contentRef?.current);
    }, 0);
  }, [contentRef, setEl]);

  return (
    <>
      <ScrollWatchContextProvider>
        <div className="App">
          <GlobalStyles />
          <Sun />
          <header className="App-header" ref={contentRef}>
            <nav>
              Logo, Home, About, Projects, Contact
            </nav>
            <img src={PiotrAdamowiczPicture} className="App-picture" alt="Piotr Adamowicz" />
            <Logo />
            <h1 style={{ color: COLORS.primary, textAlign: 'center' }}><small>JavaScript/TypeScript web and mobile
              developer</small></h1>
          </header>
          <div className="App-content">
            <PageSection title="About">
              <p>Currently I am working on my portfolio website. You will soon be able to see the projects I used to
                work
                on.</p>
              <p>This particular page was done with React.js and some CSS.</p>
              <p>To contact me please visit my <a href="https://www.linkedin.com/in/piotradamowicz/" target="_blank"
                rel="noopener noreferrer">LinkedIn profile</a></p>
              <div style={{ visibility: 'hidden' }}>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
                <p>long...</p>
              </div>
            </PageSection>

            {/*<h2>Projects</h2>*/}
            {/*<h2>Contact</h2>*/}
          </div>
          <Perspective />
          {el ? <WindowWatcher element={el} /> : null}
        </div>
      </ScrollWatchContextProvider>
    </>
  );
}

export default App;
