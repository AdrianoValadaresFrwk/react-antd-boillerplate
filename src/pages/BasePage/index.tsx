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
  DownOutlined,
} from '@ant-design/icons';
import {
  AppCard,
  AppLogo,
  AppTag,
  CardContainerHeader,
  CardContainerHolder,
  CardContainerList,
  HeaderButton,
  HeaderUserName,
} from './styles';
import { theme } from '../../styles/theme';
import logo from '../../assets/img/unimed_aeromedica_logo.png';
import { ColumnsCardData } from './mockedData';
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
const { Search } = Input;

const BasePage = () => {
  const [state, setState] = useState<any>({ collapsed: false });
  const onCollapse = (collapsed: any) => {
    setState((oldState: any) => {
      return { ...oldState, collapsed };
    });
  };
  const mockedData = ColumnsCardData;

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
          className="d-flex justify-content-between align-items-center"
          style={{ backgroundColor: '#F5F5F5' }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <Avatar icon={<UserOutlined />} />
            <HeaderUserName>User Name</HeaderUserName>
            <DownOutlined
              style={{ fontSize: '16px', color: `${theme.primary}` }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center mx-2">
            {/* <Input placeholder="Basic usage" /> */}
            <Search
              placeholder="input search text"
              onSearch={(e) => {
                console.log(e);
              }}
              style={{ width: 352, marginRight: 64 }}
            />
            <HeaderButton shape="round" type="primary">
              Primary Button
            </HeaderButton>
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
          {mockedData.map((columnItem) => {
            return (
              <CardContainerHolder key={columnItem.idx}>
                <CardContainerHeader className="d-flex justify-content-between align-items-center">
                  <span>{columnItem.columnName}</span>
                  <Button style={{ border: '0px solid transparent' }}>
                    <EllipsisOutlined
                      className="m0"
                      style={{ fontSize: '16px', color: `${theme.secondary}` }}
                    />
                  </Button>
                </CardContainerHeader>
                <CardContainerList>
                  {columnItem.cards.map((cardItem) => {
                    return (
                      <AppCard key={cardItem.idx} styled={cardItem.style}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <UserOutlined />
                            <span className="card-header">{cardItem.name}</span>
                          </div>
                          <AppTag>
                            <span>{cardItem.tagInfo}</span>
                          </AppTag>
                        </div>
                        <div>
                          <span className="time-stamp">
                            {cardItem.timeStamp}
                          </span>
                        </div>
                        <div>
                          <span className="card-sub-title">
                            {cardItem.subTitle}
                          </span>
                        </div>
                        <div className="d-flex">
                          <div className="d-flex align-items-center">
                            <CarOutlined />
                            <span className="card-sub-info">
                              {cardItem.subInfo}
                            </span>
                          </div>
                        </div>
                      </AppCard>
                    );
                  })}
                </CardContainerList>
              </CardContainerHolder>
            );
          })}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasePage;
