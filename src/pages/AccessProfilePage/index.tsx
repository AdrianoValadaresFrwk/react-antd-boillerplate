import { useMemo, useState } from 'react';
import { Layout, Button, Input, Avatar, Divider, Form, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  DownOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import Modal from './Modal';
import { theme } from '../../styles/theme';
import { dataSource } from './MockedData';
import { TableComponent } from './styles';
import { HeaderButton, HeaderUserName } from '../BasePage/styles';
import AppHeader from '../../components/Header';

const { Header, Content } = Layout;
const { Search } = Input;

export default function AccessProfilePage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [codSearch, setCodSearch] = useState<string>('');
  const [descSearch, setDescSearch] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);


  const filteredDataSource = useMemo(() => dataSource.filter((item) => {
    const cod = item.cod.toString().includes(codSearch);
    const desc = item.description?.toLowerCase().includes(descSearch?.toLowerCase());
    return cod || desc;
  }), [dataSource, codSearch, descSearch]);


  function showModal () {
    setIsModalVisible(true);
  };

    
  function handleOk () {
    setIsModalVisible(false);
  };

  function handleCancel () {
    setIsModalVisible(false);
  };

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
      align: 'center',
      render: () => (
        <div className="action-icons">
          <Tooltip title="Editar">
            <EditOutlined
              style={{ fontSize: '20px' }}
              onClick={() => {
                console.log('Editar', selectedIndex);
                console.log(dataSource[selectedIndex]);
              }}
            />
          </Tooltip>
          <Tooltip title="Deletar">
            <DeleteOutlined
              style={{ fontSize: '20px' }}
              onClick={() => {
                console.log('Excluir', selectedIndex);
                console.log(dataSource[selectedIndex]);
              }}
            />
          </Tooltip>
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
              setCodSearch(e.code);
              setDescSearch(e.description);
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
                { required: false, message: 'Por favor, informar um código!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Descrição"
              name="description"
              rules={[
                { required: false, message: 'Por favor, informar uma descrição!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <div className="d-flex" style={{ justifyContent: 'end' }}>
                <Button type="primary" shape="round" htmlType="submit">
                  Pesquisar
                </Button>
                <Button type="primary" shape="round" style={{ marginLeft: 24 }} onClick={showModal}>
                  Novo
                </Button>
              </div>
            </Form.Item>
          </Form>
          <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          />
        </div>
        <TableComponent
          dataSource={filteredDataSource}
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
