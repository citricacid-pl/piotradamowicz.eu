import './App.css';
import PiotrAdamowiczPicture from './assets/PiotrAdamowiczPicture.jpg';
import GlobalStyles from './components/GlobalStyles';
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
        <Sun />
        <h1>Piotr Adamowicz <br /><small>JavaScript/TypeScript web and mobile developer</small></h1>
      </header>
      <div className="App-content">
        <h2>About</h2>
        <h2>Projects</h2>
      </div>
    </div>
  );
}

export default App;
