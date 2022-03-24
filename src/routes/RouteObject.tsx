import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const BasePage = lazy(() => import('../pages/BasePage'));
const Painel = lazy(() => import('../pages/Panel'));
const Login = lazy(() => import('../pages/Login'));

const Router = (logged: boolean, token: string): RouteObject[] => [
  {
    path: '/',
    element: logged || token ? <BasePage /> : <Navigate to="login" />,
    children: [
      {
        path: '/',
        element: <Painel />,
      },
    ],
  },
  { path: 'login', element: <Login /> },
  { path: '*', element: <Navigate to="/" /> },
];

export default Router;
