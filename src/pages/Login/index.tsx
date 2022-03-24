import React, { useState, useContext } from 'react';

import { Col, Row, Form, Input, Button, Checkbox } from 'antd';
import logo from '../../assets/img/unimed_aeromedica_logo.png';
import AuthContext from '../../contexts/Authentication';
import {
  Left,
  Text,
  LoginPageLogo,
  WrapperButton,
  LoginPageFooter,
  FormHolder,
  LoginInfo,
} from './styles';

import { ButtonStyled } from '../../components/shared/Button/styles';

const initialState = () => {
  return { user: '', password: '' };
};

const Login = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [values, setValues] = useState(initialState);
  const { login, loading, error } = useContext(AuthContext);

  window.addEventListener('resize', (e: any) => {
    setScreenWidth(e.target.innerWidth);
  });

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event);
    login(event as any);
  };

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row remove-from-sm-screen" span={12}>
          <Left />
        </Col>
        <Col className="gutter-row" span={screenWidth > 768 ? 12 : 24}>
          <FormHolder>
            <LoginPageLogo src={logo} alt="logo lider aviação" />
            <Text>Boas vindas ao Dédalus 2.0</Text>
            <LoginInfo>Para entrar, informe seu email e senha.</LoginInfo>
            <Form
              name="basic"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onSubmit}
              onFinishFailed={(e) => {
                console.log(e);
              }}
              autoComplete="off"
            >
              <Form.Item
                label="Login"
                name="user"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Senha"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <WrapperButton>
                <ButtonStyled
                  htmlType="submit"
                  loading={loading}
                  style={{ width: '100%' }}
                >
                  Entrar
                </ButtonStyled>
              </WrapperButton>
            </Form>
          </FormHolder>
        </Col>
      </Row>
      <LoginPageFooter />
    </>
  );
};

export default Login;
