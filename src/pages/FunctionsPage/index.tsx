import { useState } from 'react';
import {
  Layout,
  Button,
  Input,
  Avatar,
  Divider,
  Form,
  Tooltip,
  Modal,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  DownOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { dataSource } from '../AccessProfilePage/MockedData';
import { TableComponent } from '../AccessProfilePage/styles';
import { theme } from '../../styles/theme';
import { HeaderButton, HeaderUserName } from '../BasePage/styles';

const { Header, Content } = Layout;
const { Search } = Input;

export default function FunctionsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: ' ',
      dataIndex: 'actions',
      key: 'actions',
      align: 'center',
      render: () => (
        <div className="action-icons">
          <Tooltip title="Editar">
            <EditOutlined
              style={{ fontSize: '20px' }}
              onClick={() => {
                console.log('Editar', selectedIndex);
                console.log(dataSource[selectedIndex]);
                setEditMode(true);
                showModal();
              }}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  function showModal() {
    setModalVisible(true);
  }

  function handleOk() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalVisible(false);
    }, 3000);
  }

  function handleCancel() {
    setModalVisible(false);
  }

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
          <h2>Pesquisar Funções </h2>
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
                <Button
                  type="primary"
                  shape="round"
                  style={{ marginLeft: 24 }}
                  onClick={() => {
                    showModal();
                  }}
                >
                  Novo
                </Button>
              </div>
            </Form.Item>
          </Form>
          <Modal
            title={<h2> {editMode ? 'Editar Função' : 'Nova Função'}</h2>}
            centered
            visible={modalVisible}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
            wrapClassName="app-modal"
            footer={[
              <Button
                key="back"
                shape="round"
                type="ghost"
                onClick={() => handleCancel()}
              >
                Cancelar
              </Button>,
              <Button
                key="submit"
                type="primary"
                shape="round"
                loading={loading}
                onClick={() => handleOk()}
              >
                {editMode ? 'Salvar' : 'Cadastrar'}
              </Button>,
            ]}
          >
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

              {/* <Form.Item>
              <div className="d-flex" style={{ justifyContent: 'end' }}>
                <Button type="primary" shape="round" htmlType="submit">
                  Pesquisar
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  style={{ marginLeft: 24 }}
                  onClick={() => {
                    showModal();
                  }}
                >
                  Novo
                </Button>
              </div>
            </Form.Item> */}
            </Form>
          </Modal>
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
