import { Space } from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


export const dataSource = [
  {
    key: '1',
    cod: 1,
    description: 'Administrador Geral',
  },
  {
    key: '2',
    cod: 2,
    description: 'Cadastro',
  },
  {
    key: '3',
    cod: 3,
    description: 'Administrador Atendimento',
  },
  {
    key: '4',
    cod: 4,
    description: 'Atendimento',
  },
  {
    key: '5',
    cod: 5,
    description: 'Gestor Médico',
  },
  {
    key: '6',
    cod: 6,
    description: 'Equipe Médica',
  },
  {
    key: '7',
    cod: 7,
    description: 'Faturamento',
  },
  {
    key: '8',
    cod: 8,
    description: 'Comercial',
  },
  {
    key: '9',
    cod: 9,
    description: 'Enfermeiro',
  },
  {
    key: '10',
    cod: 10,
    description: 'Gestor Comercial',
  },
  {
    key: '11',
    cod: 11,
    description: 'Pesquisa de Satisfação',
  },
  {
    key: '12',
    cod: 12,
    description: 'Consultas',
  },
  {
    key: '13',
    cod: 13,
    description: 'Piloto',
  },
  {
    key: '14',
    cod: 14,
    description: 'Relatório',
  },
  {
    key: '15',
    cod: 15,
    description: 'Betta',
  },
  {
    key: '16',
    cod: 16,
    description: 'Gestão de Operações',
  },
  {
    key: '17',
    cod: 17,
    description: 'Farmácia',
  },
  {
    key: '18',
    cod: 18,
    description: 'Cadastro Painel Gerência',
  },
  {
    key: '19',
    cod: 19,
    description: 'Cadastro PTUA1300',
  },
  {
    key: '20',
    cod: 20,
    description: 'Parametrização R395',
  },
  {
    key: '21',
    cod: 21,
    description: 'Atendimento R395 Aeromedica',
  },
  {
    key: '22',
    cod: 22,
    description: 'Atendimento RN395 Singular',
  },
  {
    key: '23',
    cod: 23,
    description: 'Cotação de Vôo',
  },
  {
    key: '24',
    cod: 24,
    description: 'Relatórios Atend e Painel',
  },
  {
    key: '25',
    cod: 25,
    description: 'Plataforma de Vendas',
  },
  {
    key: '26',
    cod: 26,
    description: 'Cadastro Taxa',
  },
  {
    key: '27',
    cod: 27,
    description: 'Relatorio Geral de Atendimento',
  },
  {
    key: '28',
    cod: 28,
    description: 'Cadastro Empresa Ambulância',
  },
  {
    key: '29',
    cod: 29,
    description: 'Painel Gerencial Relatórios',
  },
  {
    key: '30',
    cod: 30,
    description: 'Aba Acompanhamento',
  },
  {
    key: '31',
    cod: 31,
    description: 'Relatório Aval. de Ambulância',
  },
];

export const columns = [
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
        <EditOutlined style={{fontSize: '20px'}}/>
        <DeleteOutlined style={{fontSize: '20px'}}/>
      </div>
    )
  },
];
