import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Test from '../pages/Test';
import Members from '../pages/Members';
import Register from '../pages/Register';
import App from '../App';

// 라우팅 페이지 설정
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'members',
          element: <Members />,
        },
        {
          path: 'test',
          element: <Test />,
        },
      ],
    },
  ],
  { basename: '/' },
);
