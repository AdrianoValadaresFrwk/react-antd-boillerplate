import {
  DownOutlined,
  UserOutlined,
  LeftOutlined,
  CaretRightOutlined,
  ShareAltOutlined,
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
  Row,
  Col,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import PanelHeader from './components/PanelHeader';
import { theme } from '../../styles/theme';
import { HeaderUserName } from '../BasePage/styles';
import { FormHolder } from '../Login/styles';
import ClientForm from './components/ClientForm';
import RouteForm from './components/RouteForm';
import AirComplementForm from './components/AirComplementForm';
import {
  AntdCol,
  BoldText,
  SmallText,
  QuotationTable,
  HeaderButton,
} from './styles';

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
      route: '1',
      origin: 'SBCY',
      destination: 'SBBH',
      dmn: '1.370',
      dkm: '1.370',
      tpmv: '03:43',
    },
    {
      key: '2',
      route: '2',
      origin: 'SBBH',
      destination: 'SBGV',
      dmn: '321,8',
      dkm: '321,8',
      tpmv: '00:38',
    },
    {
      key: '3',
      route: '3',
      origin: 'SBGV',
      destination: 'SBCY',
      dmn: '1.547',
      dkm: '1.547',
      tpmv: '04:11',
    },
    {
      key: '#tablefooter',
      route: '',
      origin: 'Total:',
      destination: '',
      dmn: '',
      dkm: '3.144,50',
      tpmv: '08:32',
    },
  ];

  const columns = [
    {
      title: 'Rota',
      dataIndex: 'route',
      key: 'route',
    },
    {
      title: 'Origem',
      dataIndex: 'origin',
      key: 'origin',
    },
    {
      title: 'Destino',
      dataIndex: 'destination',
      key: 'destination',
    },
    {
      title: 'Dist. milhas nauticas',
      dataIndex: 'dmn',
      key: 'dmn',
    },
    {
      title: 'Dist. KM',
      dataIndex: 'dkm',
      key: 'dkm',
    },
    {
      title: 'Tempo voo',
      dataIndex: 'tpmv',
      key: 'tpmv',
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
            shape="round"
            style={{ border: 0, backgroundColor: theme.background }}
            icon={
              <LeftOutlined
                style={{ fontSize: '16px', color: `${theme.primary}` }}
              />
            }
            onClick={() => {
              navigate('/');
            }}
          />
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
            style={{
              margin: '0 24px',
              backgroundColor: theme.accent,
              color: theme.secondary,
              borderColor: theme.accent,
            }}
            onClick={() => {
              // navigate('/new-quotation');
            }}
          >
            Imprimir
          </HeaderButton>
          <HeaderButton
            shape="round"
            type="primary"
            ghost
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
          backgroundColor: theme.background,
        }}
        className="d-flex"
      >
        <div style={{ width: '50%', marginRight: 24 }}>
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
                <SmallText>Nova cotação</SmallText>
                <SmallText>Missão</SmallText>
              </div>
              <Progress
                percent={2}
                showInfo={false}
                strokeColor={theme.secondary}
              />
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
                <SmallText>Pessoas envolvidas</SmallText>
                <BoldText>
                  Fábio Nazaré Vieira(NLOT), Gisele Freitas(GMD), Joana
                  Magalhães(GMD)
                </BoldText>
              </div>
            </div>
            <Divider />
            <Row>
              <AntdCol flex="auto">
                <div className="d-flex" style={{ flexDirection: 'column' }}>
                  <SmallText>Paciente</SmallText>
                  <BoldText>Flávio Mendes Campos</BoldText>
                </div>
              </AntdCol>
              <AntdCol flex="auto">
                <div className="d-flex" style={{ flexDirection: 'column' }}>
                  <SmallText>Tipo cliente</SmallText>
                  <BoldText>Unimed Aeromédica</BoldText>
                </div>
              </AntdCol>
            </Row>
            <Row>
              <AntdCol flex="auto">
                <div className="d-flex" style={{ flexDirection: 'column' }}>
                  <SmallText>Paciente</SmallText>
                  <BoldText>Flávio Mendes Campos</BoldText>
                </div>
              </AntdCol>
              <AntdCol flex="auto">
                <div className="d-flex" style={{ flexDirection: 'column' }}>
                  <SmallText>Tipo cliente</SmallText>
                  <BoldText>Unimed Aeromédica</BoldText>
                </div>
              </AntdCol>
              <AntdCol flex="auto">
                <div className="d-flex" style={{ flexDirection: 'column' }}>
                  <SmallText>Tipo cliente</SmallText>
                  <BoldText>Unimed Aeromédica</BoldText>
                </div>
              </AntdCol>
            </Row>
            {/* <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <div className="d-flex" style={{ flexDirection: 'column' }}>
                <SmallText>Paciente</SmallText>
                <BoldText>Flávio Mendes Campos</BoldText>
              </div>
              <div className="d-flex" style={{ flexDirection: 'column' }}>
                <SmallText>Tipo cliente</SmallText>
                <BoldText>Unimed Aeromédica</BoldText>
              </div>
              <div className="d-flex" style={{ flexDirection: 'column' }}>
                <SmallText>Tipo cliente</SmallText>
                <BoldText>Unimed Aeromédica</BoldText>
              </div>
            </div> */}
            <Divider />
            <span>Percurso aéreo</span>
            <QuotationTable
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              style={{ marginBottom: 21 }}
            />
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
              <Button
                className="d-flex"
                style={{ alignItems: 'center' }}
                type="link"
                icon={<ShareAltOutlined style={{ fontSize: 18 }} />}
              >
                Compartilhar
              </Button>
              <Button type="primary" shape="round" ghost>
                Montar Rota
              </Button>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
