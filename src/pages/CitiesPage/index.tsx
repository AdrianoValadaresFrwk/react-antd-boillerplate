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
  Select,
  Drawer,
  Upload,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  DownOutlined,
  EditOutlined,
  PoweroffOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { dataSource } from './MockedData';
import { TableComponent } from '../AccessProfilePage/styles';
import { theme } from '../../styles/theme';
import { HeaderButton, HeaderUserName } from '../BasePage/styles';
import AppHeader from '../../components/Header';
import {
  FormItem,
  FormItemWithDropDown,
} from '../NewQuotationPage/components/ClientForm/styles';
import CreateEditCitiesModal from './modal';

const { Header, Content } = Layout;
const { Search } = Input;
const { Option } = Select;

export default function CitiesPage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [tableSource, setTableSource] = useState<any>(dataSource);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
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
      title: 'Estado',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'País',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
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
          <Tooltip title="Desativar">
            <PoweroffOutlined />
          </Tooltip>
        </div>
      ),
    },
  ];
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

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
          ? 'Cidade atualizada com sucesso'
          : 'Cidade cadastrada com sucesso'
      );
    }, 3000);
  }

  function handleCancel() {
    setEditMode(false);
    setModalVisible(false);
  }

  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

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
          <h2 style={{ color: theme.secondary }}>Pesquisar Cidades </h2>
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
              label="Descrição da Cidade"
              name="cotyDescription"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <FormItemWithDropDown style={{ marginBottom: 0 }}>
              <FormItem
                colon={false}
                name="state"
                label="Estado"
                rules={[
                  { required: true, message: 'Por favor selecione um estado' },
                ]}
                className="doropdown-container"
                style={{ width: '50%' }}
              >
                <Select
                  placeholder="Selecione um estado"
                  onChange={(e) => {
                    console.log(e);
                  }}
                  allowClear
                >
                  <Option value="SP">SP</Option>
                  <Option value="RJ">RJ</Option>
                </Select>
              </FormItem>
            </FormItemWithDropDown>

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
                  Incluir nova cidade
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  style={{ marginLeft: 24 }}
                  onClick={() => {
                    showDrawer();
                  }}
                >
                  Importar
                </Button>
              </div>
            </Form.Item>
          </Form>
          <CreateEditCitiesModal
            editMode={editMode}
            loading={loading}
            onCancel={handleCancel}
            onSubmit={handleOk}
            setModalVisible={setModalVisible}
            visible={modalVisible}
            editData={selectedItem}
          />
          <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={closeDrawer}
            visible={drawerVisible}
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
              <FormItemWithDropDown style={{ marginBottom: 0 }}>
                <FormItem
                  colon={false}
                  name="state"
                  label="Estado"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor selecione um estado',
                    },
                  ]}
                  className="doropdown-container"
                  style={{ width: '100%' }}
                >
                  <Select
                    placeholder="Selecione um estado"
                    onChange={(e) => {
                      console.log(e);
                    }}
                    allowClear
                  >
                    <Option value="São Paulo">São Paulo</Option>
                    <Option value="Rio de Janeiro">Rio de Janeiro</Option>
                  </Select>
                </FormItem>
              </FormItemWithDropDown>

              <Form.Item
                label="Arquivo"
                name="File"
                rules={[
                  {
                    required: true,
                    message: 'Por favor selecione um arquivo!',
                  },
                ]}
              >
                <Upload {...props}>
                  <Button type="ghost" icon={<UploadOutlined />}>
                    Escolher arquivo
                  </Button>
                </Upload>
              </Form.Item>

              <Form.Item>
                <div className="d-flex" style={{ justifyContent: 'end' }}>
                  <Button type="primary" shape="round" htmlType="submit">
                    Carregar arquivo
                  </Button>
                  <Button
                    type="primary"
                    shape="round"
                    style={{ marginLeft: 24 }}
                    onClick={() => {
                      closeDrawer();
                    }}
                  >
                    Cancelar
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Drawer>
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
