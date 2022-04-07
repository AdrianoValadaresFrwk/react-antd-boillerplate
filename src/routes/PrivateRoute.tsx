import { useContext } from 'react';
import { useRoutes } from 'react-router-dom';
import RouterObject from './RouteObject';

import AuthContext from '../contexts/Authentication';
import useStorage from '../utils/localStorage/useStorage';

const PrivateRoute = () => {
  const { token } = useContext(AuthContext);
  const logged = useStorage('token')[0];
  const routing = useRoutes(RouterObject(logged, token));
  return routing;
};

export default PrivateRoute;
