import './App.css';
import ScrollWatchContextProvider from './context/ScrollWatchContext';
import Root from './pages/Root';

function App() {

  return (
    <>
      <ScrollWatchContextProvider>
        {/* TODO Prepare router */}
        <Root />
      </ScrollWatchContextProvider>
    </>
  );
}

export default App;
