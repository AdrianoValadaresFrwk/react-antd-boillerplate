import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const BasePage = lazy(() => import('../pages/BasePage'));
const Painel = lazy(() => import('../pages/Panel'));
const AccessProfilePage = lazy(() => import('../pages/AccessProfilePage'));

export default function ExecuteGuard(rule: string, params?: any): JSX.Element {
  switch (rule) {
    case '/':
      const { logged, token } = params;
      return logged || token ? <BasePage /> : <Navigate to="login" />;
    case '/access-profiles':
      return <AccessProfilePage />;

    default:
      console.log('executeGuard');
      return <>Rule not found</>;
  }
}
