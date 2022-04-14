import { useState } from 'react';
import {
  Layout,
  Button,
  Input,
  Avatar,
  Divider,
  Form,
  Tooltip,
  message,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  DownOutlined,
  EditOutlined,
  HistoryOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import CreateEditUsersModal from './modal';
import { dataSource } from './MockedData';
import { TableComponent } from '../AccessProfilePage/styles';
import { theme } from '../../styles/theme';
import { HeaderButton, HeaderUserName } from '../BasePage/styles';
import AppHeader from '../../components/Header';

// const { Header, Content } = Layout;
const { Content } = Layout;
const { Search } = Input;

export default function UsersPage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [tableSource, setTableSource] = useState<any>(dataSource);
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Código',
      dataIndex: 'cod',
      key: 'cod',
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Perfil de Acesso',
      dataIndex: 'accessProfile',
      key: 'accessProfile',
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      align: 'center',
      render: (value, record, index) => (
        <div className="action-icons">
          <Tooltip title="Editar">
            <EditOutlined
              style={{ fontSize: '20px' }}
              onClick={() => {
                const idx = record.cod - 1;
                console.log('Editar', idx);
                // console.log(tableSource[idx]);
                setEditMode(true);
                setSelectedItem(() => {
                  return {
                    ...tableSource[idx],
                    tableIdx: idx,
                  };
                });
                showModal();
              }}
            />
          </Tooltip>
          <Tooltip title="Historico">
            <HistoryOutlined style={{ fontSize: '20px' }} />
          </Tooltip>
          <Tooltip title="Restaurar senha">
            <SettingOutlined style={{ fontSize: '20px' }} />
          </Tooltip>
        </div>
      ),
    },
  ];

  function showModal() {
    setModalVisible(true);
  }

  function handleOk(value?: any) {
    setLoading(true);
    setTimeout(() => {
      setTableSource((oldDataSource) => {
        if (editMode) {
          tableSource[value.tableIdx] = value;
          return [...tableSource];
        } else {
          return [
            ...oldDataSource,
            {
              ...value,
              cod: tableSource.length + 1,
              key: (tableSource.length + 1).toString(),
            },
          ];
        }
      });
      setLoading(false);
      setModalVisible(false);
      setEditMode(false);
      message.success(
        editMode
          ? 'Usuário atualizado com sucesso'
          : 'Usuário cadastrado com sucesso'
      );
    }, 3000);
  }

  function handleCancel() {
    setEditMode(false);
    setModalVisible(false);
  }

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
          <h2 style={{ color: theme.secondary }}>Pesquisar Usuários </h2>
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
              label="Nome"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Por favor, informe um nome de usuário!',
                },
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
          <CreateEditUsersModal
            editMode={editMode}
            loading={loading}
            onCancel={handleCancel}
            onSubmit={handleOk}
            setModalVisible={setModalVisible}
            visible={modalVisible}
            editData={selectedItem}
          />
        </div>
        <TableComponent
          dataSource={tableSource}
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
