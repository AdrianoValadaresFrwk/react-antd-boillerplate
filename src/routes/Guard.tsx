import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const BasePage = lazy(() => import('../pages/BasePage'));
const Painel = lazy(() => import('../pages/Panel'));
const AccessProfilePage = lazy(() => import('../pages/AccessProfilePage'));
const FunctionsPage = lazy(() => import('../pages/FunctionsPage'));
const UsersPage = lazy(() => import('../pages/UsersPage'));
const CitiesPage = lazy(() => import('../pages/CitiesPage'));

export default function ExecuteGuard(rule: string, params?: any): JSX.Element {
  switch (rule) {
    case '/':
      const { logged, token } = params;
      return logged || token ? <BasePage /> : <Navigate to="login" />;
    case '/access-profiles':
      return <AccessProfilePage />;
    case '/functions':
      return <FunctionsPage />;
    case '/users':
      return <UsersPage />;
    case '/cities':
      return <CitiesPage />;

    default:
      console.log('executeGuard');
      return <>Rule not found</>;
  }
}
