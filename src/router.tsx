import { createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <About />,
      },
      {
        path: 'test',
        element: <div>TEST</div>,
      },
    ],
  },
]);

export default router;
