import React, { useState, useContext } from 'react';

import logo from '../../assets/img/icons/logo.svg';
import Input from '../../components/Input';
import AuthContext from '../../contexts/Authentication';
import {
  Container,
  Left,
  Right,
  Text,
  Form,
  Title,
  Image,
  WrapperButton,
  ErrorMessage,
} from './styles';

import { ButtonStyled } from '../../components/shared/Button/styles';

const initialState = () => {
  return { user: '', password: '' };
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const { login, loading, error } = useContext(AuthContext);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(values);
  };

  return (
    <Container>
      <Left>
        <Image src={logo} alt="logo lider aviação" />
        <Text>Acesse sua conta</Text>
        <ErrorMessage>{error}</ErrorMessage>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            label="Login"
            name="user"
            value={values.user}
            onChange={onChange}
          />
          <Input
            type="password"
            label="Senha"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <WrapperButton>
            <ButtonStyled htmlType="submit" loading={loading}>
              Entrar
            </ButtonStyled>
          </WrapperButton>
        </Form>
      </Left>
      <Right>
        <Title>Manutenção Executiva</Title>
      </Right>
    </Container>
  );
};

export default Login;
