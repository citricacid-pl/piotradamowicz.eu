import { useEffect, useState } from 'react';
import './App.css';
import PiotrAdamowiczPicture from './assets/PiotrAdamowiczPicture.jpg';
import Perspective from './components/design/Perspective';
import GlobalStyles from './components/GlobalStyles';
import Logo from './components/header/Logo';
import PageSection from './components/PageSection';
import Sun from './components/Sun';
import { COLORS } from './constants/colors';

function App() {
  const [scroll, setScroll] = useState(0);

  const scrollEvent = (event: any): void => {
    if (!event) {
      return;
    }
    let scrollY = event?.currentTarget?.scrollY || 0;
    setScroll(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <Sun />
      <header className="App-header">
        <nav>
          Logo, Home, About, Projects, Contact {scroll}
        </nav>
        <img src={PiotrAdamowiczPicture} className="App-picture" alt="Piotr Adamowicz" />
        <Logo />
        <h1 style={{ color: COLORS.primary, textAlign: 'center' }}><small>JavaScript/TypeScript web and mobile
          developer</small></h1>
      </header>
      <div className="App-content">
        <PageSection title="About">
          <p>Currently I am working on my portfolio website. You will soon be able to see the projects I used to work
            on.</p>
          <p>This particular page was done with React.js and some CSS.</p>
          <p>To contact me please visit my <a href="https://www.linkedin.com/in/piotradamowicz/" target="_blank"
            rel="noopener noreferrer">LinkedIn profile</a></p>
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
        </PageSection>

        {/*<h2>Projects</h2>*/}
        {/*<h2>Contact</h2>*/}
      </div>
      <Perspective />
    </div>
  );
}

export default App;
