import { Layout, Button, Input, Avatar, Divider, Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  EllipsisOutlined,
  CarOutlined,
  DownOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import { theme } from '../../styles/theme';
import { ColumnsCardData } from '../BasePage/mockedData';
import { dataSource, columns } from './MockedData';
import { TableComponent } from './styles';
import { HeaderButton, HeaderUserName } from '../BasePage/styles';

const { Header, Content } = Layout;
const { Search } = Input;

export default function AccessProfilePage() {
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
          backgroundColor: theme.background,
        }}
        className="d-flex flex-column"
      >
        <div>
          <h2>Pesquisar Perfil </h2>
          <Divider />
          <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={(e) => {
              console.log('finish', e);
            }}
            onFinishFailed={(e) => {
              console.log('fail', e);
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Código"
              name="code"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Descrição"
              name="description"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <div className="d-flex" style={{ justifyContent: 'end' }}>
                <Button type="primary" shape="round" htmlType="submit">
                  Pesquisar
                </Button>
                <Button type="primary" shape="round" style={{ marginLeft: 24 }}>
                  Novo
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
        <TableComponent dataSource={dataSource} columns={columns} pagination={{ position: ['bottomLeft'] }} />
      </Content>
    </Layout>
  );
}
