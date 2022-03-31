import {
  DownOutlined,
  UserOutlined,
  LeftOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import { Avatar, Input, Layout, Collapse, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import PanelHeader from './components/PanelHeader';
import { theme } from '../../styles/theme';
import { HeaderButton, HeaderUserName } from '../BasePage/styles';

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
              <p>{text}</p>
            </Panel>
            <Panel
              showArrow={false}
              header={<PanelHeader textHeader="Rota" />}
              key="2"
              className="site-collapse-custom-panel"
            >
              <p>{text}</p>
            </Panel>
            <Panel
              showArrow={false}
              header={<PanelHeader textHeader="Complemento aéreo" />}
              key="3"
              className="site-collapse-custom-panel"
            >
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </Content>
    </Layout>
  );
}
