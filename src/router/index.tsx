import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import PrivateUser from '../pages/PrivateUser';
import PrivateAdmin from '../pages/PrivateAdmin';
import ProtectedUser from '../components/ProtectedUser';
import ProtectedAdmin from '../components/ProtectedAdmin';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/login', element: <Login /> },
      {
        element: <ProtectedUser />,
        children: [
          {
            path: '/privateUser',
            element: <PrivateUser />,
          },
        ],
      },
      {
        element: <ProtectedAdmin />,
        children: [
          {
            path: '/privateAdmin',
            element: <PrivateAdmin />,
          },
        ],
      },
    ],
  },
]);
