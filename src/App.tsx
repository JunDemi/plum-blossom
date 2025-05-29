import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
  ],
  { basename: '/' },
);