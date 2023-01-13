import { RouterProvider } from 'react-router-dom';
import './App.css';
import ScrollWatchContextProvider from './context/ScrollWatchContext';
import router from './router';

function App() {
  return (
    <>
      <ScrollWatchContextProvider>
        <RouterProvider router={router} />
      </ScrollWatchContextProvider>
    </>
  );
}

export default App;
