import { useState } from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Avatar,
  Input,
  Image,
  Card,
  Badge,
} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  EllipsisOutlined,
  CarOutlined,
} from '@ant-design/icons';
import {
  AppCard,
  AppTag,
  CardContainerHeader,
  CardContainerHolder,
  CardContainerList,
} from './styles';
// import { Card } from 'antd';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from '../../components/Header';
// import Menu from '../../components/Menu';
// import ModalContainer from '../../components/ModalContainer';
// import { MainContainer, Container, Content } from './styles';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

const BasePage = () => {
  const [state, setState] = useState<any>({ collapsed: false });
  const onCollapse = (collapsed: any) => {
    setState((oldState: any) => {
      return { ...oldState, collapsed };
    });
  };
  return (
    // <MainContainer>
    //   <ModalContainer />
    //   <Header />
    //   <Container>
    //     <Menu />
    //     <Content>
    //       <Suspense fallback={<div />}>
    //         <Outlet />
    //       </Suspense>
    //     </Content>
    //   </Container>
    // </MainContainer>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
        <div className="logo">
          {/* <Image width={200} src={logo} /> */}
          <span style={{ color: 'white' }}>Logo</span>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Userr">
            <Menu.Item key="3">Tomm</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background d-flex justify-content-between align-items-center"
          style={{ padding: 0, backgroundColor: '#0A5F55 !important' }}
        >
          <div className="d-flex justify-content-center align-items-center mx-2">
            <Avatar icon={<UserOutlined />} />
            <h3 className="ml-2 mb-0" style={{ color: 'white' }}>
              User Name
            </h3>
          </div>
          <div className="d-flex justify-content-center align-items-center mx-2">
            <Input placeholder="Basic usage" />
            <Button type="primary">Primary Button</Button>
          </div>
        </Header>
        <Content
          style={{
            padding: '16px 36px',
            overflowX: 'auto',
            height: 'calc(100vh - 130px)',
          }}
          className="d-flex"
        >
          <CardContainerHolder>
            <CardContainerHeader className="d-flex justify-content-between align-items-center">
              <span>3 Novos atendimentos</span>
              <Button>
                <EllipsisOutlined
                  className="m0"
                  style={{ fontSize: '16px', color: '#0A5F55' }}
                />
              </Button>
            </CardContainerHeader>
            <CardContainerList>
              <AppCard>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <UserOutlined />
                    <span className="card-header">Flávio Mendes Campos</span>
                  </div>
                  <AppTag>
                    <span>TTU</span>
                  </AppTag>
                </div>
                <div>
                  <span className="time-stamp">03 Dez • 7:44</span>
                </div>
                <div>
                  <span className="start-end">Origem – destino</span>
                </div>
                <div className="d-flex">
                  <div className="d-flex align-items-center">
                    <CarOutlined />
                    <span className="card-header">
                      Cuiabá, MT – Salvador, BA
                    </span>
                  </div>
                </div>
              </AppCard>
            </CardContainerList>
          </CardContainerHolder>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasePage;
