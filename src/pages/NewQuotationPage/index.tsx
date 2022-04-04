import {
  DownOutlined,
  UserOutlined,
  LeftOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Input,
  Layout,
  Collapse,
  Button,
  Form,
  Image,
  Table,
  Progress,
  Divider,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import PanelHeader from './components/PanelHeader';
import { theme } from '../../styles/theme';
import { HeaderButton, HeaderUserName } from '../BasePage/styles';
import { FormHolder } from '../Login/styles';
import ClientForm from './components/ClientForm';
import RouteForm from './components/RouteForm';
import AirComplementForm from './components/AirComplementForm';

const { Header, Content } = Layout;
const { Search } = Input;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function NewQuotation() {
  const navigate = useNavigate();
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <Layout className="site-layout">
      <Header
        className="d-flex justify-content-between align-items-center"
        style={{ backgroundColor: theme.background }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            <LeftOutlined
              style={{ fontSize: '16px', color: `${theme.primary}` }}
            />
          </Button>
          <HeaderUserName>Nova Cotação</HeaderUserName>
          <span style={{ color: theme.gray, fontSize: 24, fontWeight: 700 }}>
            nº 10204-1
          </span>
        </div>
        <div className="d-flex justify-content-center align-items-center mx-2">
          <HeaderButton
            shape="round"
            type="primary"
            onClick={() => {
              // navigate('/new-quotation');
            }}
          >
            Salvar
          </HeaderButton>
          <HeaderButton
            shape="round"
            type="primary"
            onClick={() => {
              // navigate('/new-quotation');
            }}
          >
            Imprimir
          </HeaderButton>
          <HeaderButton
            shape="round"
            type="primary"
            onClick={() => {
              // navigate('/new-quotation');
            }}
          >
            Enviar email
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
        <div style={{ width: '50%' }}>
          {/* expandIcon={({ isActive }) => isActive} */}
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            className="site-collapse-custom-collapse"
          >
            <Panel
              showArrow={false}
              header={<PanelHeader textHeader="Dados Cliente" />}
              key="1"
              className="site-collapse-custom-panel"
            >
              <ClientForm />
            </Panel>
            <Panel
              showArrow={false}
              header={<PanelHeader textHeader="Rota" />}
              key="2"
              className="site-collapse-custom-panel"
            >
              <RouteForm />
            </Panel>
            <Panel
              showArrow={false}
              header={<PanelHeader textHeader="Complemento aéreo" />}
              key="3"
              className="site-collapse-custom-panel"
            >
              <AirComplementForm />
            </Panel>
          </Collapse>
        </div>
        <div style={{ width: '50%' }}>
          <div className="d-flex" style={{ flexDirection: 'column' }}>
            <div className="d-flex" style={{ flexDirection: 'column' }}>
              <div className="d-flex justify-content-between">
                <span>Nova cotação</span>
                <span>Missão</span>
              </div>
              <Progress percent={10} showInfo={false} />
            </div>
            <Divider />
            <div className="d-flex">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <Avatar
                src={
                  <Image
                    src="https://joeschmoe.io/api/v1/random"
                    style={{ width: 32 }}
                  />
                }
              />
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                U
              </Avatar>
              <div
                className="d-flex"
                style={{ flexDirection: 'column', marginLeft: 28 }}
              >
                <span>Pessoas envolvidas</span>
                <span>
                  Fábio Nazaré Vieira(NLOT), Gisele Freitas(GMD), Joana
                  Magalhães(GMD)
                </span>
              </div>
            </div>
            <Divider />
            <div
              className="d-flex"
              style={{ justifyContent: 'space-evenly', marginBottom: 24 }}
            >
              <div className="d-flex" style={{ flexDirection: 'column' }}>
                <span>Paciente</span>
                <span>Flávio Mendes Campos</span>
              </div>
              <div className="d-flex" style={{ flexDirection: 'column' }}>
                <span>Tipo cliente</span>
                <span>Unimed Aeromédica</span>
              </div>
            </div>
            <div className="d-flex" style={{ justifyContent: 'space-evenly' }}>
              <div className="d-flex" style={{ flexDirection: 'column' }}>
                <span>Paciente</span>
                <span>Flávio Mendes Campos</span>
              </div>
              <div className="d-flex" style={{ flexDirection: 'column' }}>
                <span>Tipo cliente</span>
                <span>Unimed Aeromédica</span>
              </div>
              <div className="d-flex" style={{ flexDirection: 'column' }}>
                <span>Tipo cliente</span>
                <span>Unimed Aeromédica</span>
              </div>
            </div>
            <Divider />
            <span>Percurso aéreo</span>
            <Table dataSource={dataSource} columns={columns} />
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <Button type="primary">Compartilhar</Button>
              <Button type="primary">Montar Rota</Button>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
