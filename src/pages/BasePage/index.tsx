import { Suspense, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, Avatar, Input, Image } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DownOutlined,
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

  return (
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
          defaultSelectedKeys={['1']}
          mode="inline"
          style={{ backgroundColor: `${theme.secondary}` }}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
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
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Suspense fallback={<div />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export default BasePage;
