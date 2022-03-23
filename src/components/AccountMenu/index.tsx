import { ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../contexts/Authentication';
import { Container, Title, Text, Line, Button } from './styles';

const AccountMenu = (): ReactElement<HTMLElement> => {
  const { setToken, removeToken, userData, removeUserDagaStorage } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const logout = (): void => {
    setToken('');
    removeToken();
    removeUserDagaStorage();
    navigate('/login');
  };

  const userName = userData?.nome;
  const userId = userData?.matricula;

  return (
    <Container>
      <Title>{userName}</Title>
      <Text>{userId}</Text>
      <Line />
      <Text>Minha conta</Text>
      <Button onClick={logout}>
        <Text>Sair</Text>
      </Button>
      <Text>--</Text>
    </Container>
  );
};

export default AccountMenu;
