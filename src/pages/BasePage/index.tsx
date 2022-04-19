import { Suspense, useState } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Input, Image, Popover, Button } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DownOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { AppLogo, HeaderButton, HeaderUserName } from './styles';
import { theme } from '../../styles/theme';
import logo from '../../assets/img/unimed_aeromedica_logo.png';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const BasePage = () => {
  const [state, setState] = useState<any>({ collapsed: false });
  const onCollapse = (collapsed: any) => {
    setState((oldState: any) => {
      return { ...oldState, collapsed };
    });
  };

  const roles = {
    user: {
      incluir: true,
      alterar: false,
      exluir: false,
    },
    ambulancia: {
      incluir: true,
      alterar: true,
      exluir: true,
    },
  };

  const administrationMenu = (
    <div>
      <Menu
        onClick={(e) => {
          console.log(e);
        }}
        style={{ backgroundColor: `${theme.secondary}` }}
        defaultOpenKeys={['sub1']}
        selectedKeys={['current']}
        mode="inline"
        theme="dark"
      >
        <SubMenu
          key="/access-control"
          icon={<MailOutlined />}
          title="Controle de Acessos"
        >
          <Menu.Item key="/access-profiles" icon={<FileOutlined />}>
            <Link to="/access-profiles">Perfis de Acesso</Link>
          </Menu.Item>
          <Menu.Item key="/users" icon={<FileOutlined />}>
            <Link to="/">Usuários</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/cities" icon={<FileOutlined />}>
          <Link to="/">Cidade</Link>
        </Menu.Item>
        <Menu.Item key="/functions" icon={<FileOutlined />}>
          <Link to="/functions">Funções</Link>
        </Menu.Item>
        <Menu.Item key="/pg" icon={<FileOutlined />}>
          <Link to="/">Parametros Gerais</Link>
        </Menu.Item>
      </Menu>
    </div>
  );

  return (
    // Cadastro -> Administração -> Controle de Acessos -> Perfis de Acesso
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible={false}
        collapsed={state.collapsed}
        onCollapse={onCollapse}
        style={{ backgroundColor: `${theme.secondary}` }}
      >
        <AppLogo>
          <Image src={logo} />
        </AppLogo>
        <Menu
          theme="dark"
          defaultSelectedKeys={[location.pathname]}
          mode="inline"
          style={{ backgroundColor: `${theme.secondary}` }}
        >
          <Menu.Item key="/" icon={<PieChartOutlined />}>
            <Link to="/"> Início</Link>
          </Menu.Item>
          {roles.ambulancia.incluir ? (
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
          ) : null}
          {roles.user.alterar ? (
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tomm</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              {roles.user.exluir ? (
                <Menu.Item key="5">Excluir</Menu.Item>
              ) : null}
            </SubMenu>
          ) : null}
          {/* <Menu.Item key="/access-profiles" icon={<FileOutlined />}>
            <Link to="/access-profiles"> Perfis de Acesso</Link>
          </Menu.Item> */}
          <SubMenu key="sub10" icon={<MailOutlined />} title="Cadastro">
            <Menu.Item key="a2" icon={<MailOutlined />}>
              <Popover
                placement="right"
                content={administrationMenu}
                trigger="hover"
              >
                Administração
              </Popover>
            </Menu.Item>
            <Menu.Item key="a1">Clientes</Menu.Item>
            <Menu.Item key="a3">Contratantes</Menu.Item>
            <Menu.Item key="a4">Gestão Médica</Menu.Item>
            <Menu.Item key="a5">Gestão operacional</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Suspense fallback={<div />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export default BasePage;
