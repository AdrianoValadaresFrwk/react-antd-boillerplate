import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/Authentication';
import { DrawerProvider } from './contexts/Drawer';
import { MockedRandomApiProvider } from './contexts/MockRandomUserApi';
import PrivateRoute from './routes/PrivateRoute';
import './App.less';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <DrawerProvider>
          <MockedRandomApiProvider>
            <PrivateRoute />
          </MockedRandomApiProvider>
        </DrawerProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
