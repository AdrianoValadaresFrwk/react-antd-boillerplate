import { Layout, Button, Input, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  EllipsisOutlined,
  CarOutlined,
  DownOutlined,
} from '@ant-design/icons';
import {
  AppCard,
  AppTag,
  CardContainerHeader,
  CardContainerHolder,
  CardContainerList,
} from './styles';
import { theme } from '../../styles/theme';
import { ColumnsCardData } from '../BasePage/mockedData';
import { HeaderButton, HeaderUserName } from '../BasePage/styles';

const { Header, Content } = Layout;
const { Search } = Input;

export default function MissionPage() {
  const mockedData = ColumnsCardData;
  const navigate = useNavigate();

  return (
    <Layout className="site-layout">
      <Header
        className="d-flex justify-content-between align-items-center"
        style={{ backgroundColor: theme.background }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <Avatar icon={<UserOutlined />} />
          <HeaderUserName>User Name</HeaderUserName>
          <DownOutlined
            style={{ fontSize: '16px', color: `${theme.primary}` }}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center mx-2">
          <Search
            placeholder="Search"
            onSearch={(e) => {
              console.log(e);
            }}
            style={{ width: 352, marginRight: 64 }}
          />
          <HeaderButton
            shape="round"
            type="primary"
            onClick={() => {
              navigate('/new-quotation');
            }}
          >
            Nova Cotação
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
                        <span className="time-stamp">{cardItem.timeStamp}</span>
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
  );
}
