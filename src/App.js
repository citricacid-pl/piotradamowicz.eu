import './App.css';
import PiotrAdamowiczPicture from './assets/PiotrAdamowiczPicture.jpg';
import GlobalStyles from './components/GlobalStyles';
import PageSection from './components/PageSection';
import Sun from './components/Sun';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <nav>
          Logo, Home, About, Projects, Contact
        </nav>
        <img src={PiotrAdamowiczPicture} className="App-picture" alt="Piotr Adamowicz" />
        <h1>Piotr Adamowicz <br /><small>JavaScript/TypeScript web and mobile developer</small></h1>
      </header>
      <Sun />
      <div className="App-content">
        <PageSection title="About">
          <p>Some text about me...</p>
        </PageSection>

        {/*<h2>Projects</h2>*/}
        {/*<h2>Contact</h2>*/}
      </div>
    </div>
  );
}

export default App;
