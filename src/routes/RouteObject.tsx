import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import ExecuteGuard from './Guard';

const MissionPage = lazy(() => import('../pages/MissionPage'));
const NewQuotationPage = lazy(() => import('../pages/NewQuotationPage'));
const Login = lazy(() => import('../pages/Login'));

const RouterObject = (logged: boolean, token: string): RouteObject[] => [
  {
    path: '/',
    // element: logged || token ? <BasePage /> : <Navigate to="login" />,
    element: ExecuteGuard('/', { logged, token }),
    children: [
      {
        path: '/',
        element: <MissionPage />,
      },
      {
        path: '/new-quotation',
        // element: <Painel />,
        element: <NewQuotationPage />,
      },
      {
        path: '/access-profiles',
        element: ExecuteGuard('/access-profiles', ''),
      },
      {
        path: '/functions',
        element: ExecuteGuard('/functions', ''),
      },
    ],
  },
  { path: 'login', element: <Login /> },
  { path: '*', element: <Navigate to="/" /> },
];

export default RouterObject;
