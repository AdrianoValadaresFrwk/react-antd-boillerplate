import { useState } from 'react';
import { Layout, Button, Input, Avatar, Divider, Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  DownOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { theme } from '../../styles/theme';
import { dataSource } from './MockedData';
import { TableComponent } from './styles';
import { HeaderButton, HeaderUserName } from '../BasePage/styles';
import AppHeader from '../../components/Header';

const { Header, Content } = Layout;
const { Search } = Input;

export default function AccessProfilePage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Código',
      dataIndex: 'cod',
      key: 'cod',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: ' ',
      dataIndex: 'actions',
      key: 'actions',
      render: () => (
        <div className="action-icons">
          <EditOutlined
            style={{ fontSize: '20px' }}
            onClick={() => {
              console.log('Editar', selectedIndex);
              console.log(dataSource[selectedIndex]);
            }}
          />
          <DeleteOutlined
            style={{ fontSize: '20px' }}
            onClick={() => {
              console.log('Excluir', selectedIndex);
              console.log(dataSource[selectedIndex]);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <Layout className="site-layout">
      <AppHeader />
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
          <h2 style={{ color: theme.secondary }}>Pesquisar Perfil </h2>
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
        <TableComponent
          dataSource={dataSource}
          columns={columns as any}
          pagination={{ position: ['bottomLeft'] }}
          onChange={(e) => {
            console.log(e);
          }}
          onRow={(record, rowIndex) => {
            return {
              onMouseEnter: (event) => {
                setSelectedIndex(rowIndex as number);
              },
            };
          }}
        />
      </Content>
    </Layout>
  );
}
