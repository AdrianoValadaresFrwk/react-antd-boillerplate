import { AuthProvider } from './contexts/Authentication';
import { DrawerProvider } from './contexts/Drawer';
import { MockedRandomApiProvider } from './contexts/MockRandomUserApi';
import PrivateRoute from './routes/PrivateRoute';
import './App.less';
import GlobalStyle from './styles/globalStyles';

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <DrawerProvider>
        <MockedRandomApiProvider>
          <PrivateRoute />
        </MockedRandomApiProvider>
      </DrawerProvider>
    </AuthProvider>
  );
};

export default App;
