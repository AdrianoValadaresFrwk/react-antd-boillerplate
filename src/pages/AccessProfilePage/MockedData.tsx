import { Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

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

export const roles = [
  {
    value: 'Cadastros',
    label: 'Cadastros',
    children: [
      {
        value: 'Administração',
        label: 'Administração',
        children: [
          {
            value: 'Cidades',
            label: 'Cidades',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Importar',
                label: 'Importar',
                children: [],
              },
            ],
          },
          {
            value: 'Funções',
            label: 'Funções',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
            ],
          },
          {
            value: 'Parâmetros Gerais',
            label: 'Parâmetros Gerais',
            children: [
              {
                value: 'Parametros Gerais',
                label: 'Parametros Gerais',
                children: [],
              },
              {
                value: 'Parametros GOP',
                label: 'Parametros GOP',
                children: [],
              },
              {
                value: 'Parametros SMS',
                label: 'Parametros SMS',
                children: [],
              },
            ],
          },
          {
            value: 'Controle de Acessos',
            label: 'Controle de Acessos',
            children: [
              {
                value: 'Perfis de Acessos',
                label: 'Perfis de Acessos',
                children: [
                  {
                    value: 'Incluir',
                    label: 'Incluir',
                    children: [],
                  },
                  {
                    value: 'Alterar',
                    label: 'Alterar',
                    children: [],
                  },
                  {
                    value: 'Excluir',
                    label: 'Excluir',
                    children: [],
                  },
                ],
              },
              {
                value: 'Usuários',
                label: 'Usuários',
                children: [
                  {
                    value: 'Incluir',
                    label: 'Incluir',
                    children: [],
                  },
                  {
                    value: 'Alterar',
                    label: 'Alterar',
                    children: [],
                  },
                  {
                    value: 'Ressetar Senha',
                    label: 'Ressetar Senha',
                    children: [],
                  },
                  {
                    value: 'Adicionar Perfis',
                    label: 'Adicionar Perfis',
                    children: [],
                  },
                  {
                    value: 'Histórico',
                    label: 'Histórico',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        value: 'Clientes',
        label: 'Clientes',
        children: [
          {
            value: 'Alterar Carência',
            label: 'Alterar Carência',
            children: [
              {
                value: 'Imprimir',
                label: 'Imprimir',
                children: [],
              },
            ],
          },
          {
            value: 'Consultar',
            label: 'Consultar',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
            ],
          },
          {
            value: 'Gerar Arquivo de Criação de Carteira',
            label: 'Gerar Arquivo de Criação de Carteira',
            children: [],
          },
          {
            value: 'Importar Arquivos',
            label: 'Importar Arquivos',
            children: [
              {
                value: 'Relatório de Erros de Importação',
                label: 'Relatório de Erros de Importação',
                children: [],
              },
              {
                value: 'Relatório de Importação',
                label: 'Relatório de Importação',
                children: [],
              },
            ],
          },
          {
            value: 'Agendar Importação',
            label: 'Agendar Importação',
            children: [
              {
                value: 'Detalhes do agendamento',
                label: 'Detalhes do agendamento',
                children: [],
              },
              {
                value: 'Relatório de Erros de Importação',
                label: 'Relatório de Erros de Importação',
                children: [],
              },
              {
                value: 'Relatório de Detalhamento do Arquivo',
                label: 'Relatório de Detalhamento do Arquivo',
                children: [],
              },
            ],
          },
        ],
      },
      {
        value: 'Gestão Médica',
        label: 'Gestão Médica',
        children: [
          {
            value: 'Equipe Médica',
            label: 'Equipe Médica',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Motivos de Neg. Remoção',
            label: 'Motivos de Neg. Remoção',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Patologias',
            label: 'Patologias',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
            ],
          },
          {
            value: 'Colaborador',
            label: 'Colaborador',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
              {
                value: 'Alterar Colaborador Basico',
                label: 'Alterar Colaborador Basico',
                children: [],
              },
            ],
          },
          {
            value: 'Cursos Treinamentos',
            label: 'Cursos Treinamentos',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
            ],
          },
          {
            value: 'Escalas',
            label: 'Escalas',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
            ],
          },
          {
            value: 'Escalas Trabalho',
            label: 'Escalas Trabalho',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
              {
                value: 'PopUp Escalas de Trabalho',
                label: 'PopUp Escalas de Trabalho',
                children: [],
              },
            ],
          },
        ],
      },
      {
        value: 'Gestão Operacional',
        label: 'Gestão Operacional',
        children: [
          {
            value: 'Aeroportos',
            label: 'Aeroportos',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Importar',
                label: 'Importar',
                children: [],
              },
            ],
          },
          {
            value: 'Informações dos Aeroportos',
            label: 'Informações dos Aeroportos',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Ambulâncias',
            label: 'Ambulâncias',
            children: [
              {
                value: 'Empresas de Ambulância',
                label: 'Empresas de Ambulância',
                children: [
                  {
                    value: 'Incluir',
                    label: 'Incluir',
                    children: [],
                  },
                  {
                    value: 'Alterar',
                    label: 'Alterar',
                    children: [],
                  },
                  {
                    value: 'Excluir',
                    label: 'Excluir',
                    children: [],
                  },
                ],
              },
              {
                value: 'Tipo de Transporte',
                label: 'Tipo de Transporte',
                children: [
                  {
                    value: 'Incluir',
                    label: 'Incluir',
                    children: [],
                  },
                  {
                    value: 'Alterar',
                    label: 'Alterar',
                    children: [],
                  },
                  {
                    value: 'Excluir',
                    label: 'Excluir',
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            value: 'Empresas Aéreas',
            label: 'Empresas Aéreas',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Aeronaves Modelo',
            label: 'Aeronaves Modelo',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Aeronaves Prefixo',
            label: 'Aeronaves Prefixo',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
            ],
          },
          {
            value: 'Hospitais',
            label: 'Hospitais',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Tripulação',
            label: 'Tripulação',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Taxas',
            label: 'Taxas',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
            ],
          },
          {
            value: 'Tipos de Manifestação',
            label: 'Tipos de Manifestação',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
            ],
          },
          {
            value: 'Tipos de Categoria',
            label: 'Tipos de Categoria',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
            ],
          },
          {
            value: 'Motivo de Atrasos de Decolagem',
            label: 'Motivo de Atrasos de Decolagem',
            children: [],
          },
          {
            value: 'Motivo de Atrasos de Decolagem',
            label: 'Motivo de Atrasos de Decolagem',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
            ],
          },
        ],
      },
      {
        value: 'Contratante',
        label: 'Contratante',
        children: [
          {
            value: 'Contratantes',
            label: 'Contratantes',
            children: [
              {
                value: 'Inclusão',
                label: 'Inclusão',
                children: [
                  {
                    value: ' Empresa',
                    label: ' Empresa',
                    children: [],
                  },
                  {
                    value: ' Faturamento',
                    label: ' Faturamento',
                    children: [],
                  },
                  {
                    value: ' Integração',
                    label: ' Integração',
                    children: [],
                  },
                  {
                    value: ' Contatos',
                    label: ' Contatos',
                    children: [
                      {
                        value: 'Excluir',
                        label: 'Excluir',
                        children: [],
                      },
                    ],
                  },
                  {
                    value: 'Pop Up Contatos',
                    label: 'Pop Up Contatos',
                    children: [
                      {
                        value: 'Incluir',
                        label: 'Incluir',
                        children: [],
                      },
                      {
                        value: 'Alterar',
                        label: 'Alterar',
                        children: [],
                      },
                    ],
                  },
                  {
                    value: ' Observações',
                    label: ' Observações',
                    children: [],
                  },
                  {
                    value: 'Comissão',
                    label: 'Comissão',
                    children: [
                      {
                        value: 'Incluir',
                        label: 'Incluir',
                        children: [],
                      },
                      {
                        value: 'Alterar',
                        label: 'Alterar',
                        children: [],
                      },
                      {
                        value: 'Excluir',
                        label: 'Excluir',
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                value: 'Alteração',
                label: 'Alteração',
                children: [
                  {
                    value: ' Empresa',
                    label: ' Empresa',
                    children: [],
                  },
                  {
                    value: ' Faturamento',
                    label: ' Faturamento',
                    children: [],
                  },
                  {
                    value: ' Integração',
                    label: ' Integração',
                    children: [],
                  },
                  {
                    value: ' Contatos',
                    label: ' Contatos',
                    children: [
                      {
                        value: 'Excluir',
                        label: 'Excluir',
                        children: [],
                      },
                    ],
                  },
                  {
                    value: 'Pop Up Contatos',
                    label: 'Pop Up Contatos',
                    children: [
                      {
                        value: 'Incluir',
                        label: 'Incluir',
                        children: [],
                      },
                      {
                        value: 'Alterar',
                        label: 'Alterar',
                        children: [],
                      },
                    ],
                  },
                  {
                    value: ' Observações',
                    label: ' Observações',
                    children: [],
                  },
                  {
                    value: 'Comissão',
                    label: 'Comissão',
                    children: [
                      {
                        value: 'Incluir',
                        label: 'Incluir',
                        children: [],
                      },
                      {
                        value: 'Alterar',
                        label: 'Alterar',
                        children: [],
                      },
                      {
                        value: 'Excluir',
                        label: 'Excluir',
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
            ],
          },
          {
            value: 'Grupo de Contratantes',
            label: 'Grupo de Contratantes',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Gerar Etiquetas',
            label: 'Gerar Etiquetas',
            children: [
              {
                value: 'Impressão',
                label: 'Impressão',
                children: [],
              },
            ],
          },
          {
            value: 'Contratante / Manter Tipo Pessoa',
            label: 'Contratante / Manter Tipo Pessoa',
            children: [],
          },
          {
            value: 'Contratante / Manter Pessoa Fisica',
            label: 'Contratante / Manter Pessoa Fisica',
            children: [],
          },
          {
            value: 'Contratante / Manter Pessoa Fisica',
            label: 'Contratante / Manter Pessoa Fisica',
            children: [],
          },
          {
            value: 'Responsáveis Financeiros',
            label: 'Responsáveis Financeiros',
            children: [
              {
                value: 'Alteração',
                label: 'Alteração',
                children: [],
              },
              {
                value: 'Exclusão',
                label: 'Exclusão',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
            ],
          },
        ],
      },
      {
        value: 'Clientes A1300',
        label: 'Clientes A1300',
        children: [
          {
            value: 'Importar Arquivos A1300',
            label: 'Importar Arquivos A1300',
            children: [],
          },
          {
            value: 'Agendar Importação A1300',
            label: 'Agendar Importação A1300',
            children: [
              {
                value: 'Detalhes do agendamento A1300',
                label: 'Detalhes do agendamento A1300',
                children: [],
              },
              {
                value: 'Detalhes do Arquivo A1300',
                label: 'Detalhes do Arquivo A1300',
                children: [],
              },
            ],
          },
          {
            value: 'Consultar',
            label: 'Consultar',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
              {
                value: 'Histórico Cliente A1300',
                label: 'Histórico Cliente A1300',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 'Atendimento',
    label: 'Atendimento',
    children: [
      {
        value: 'Controle de Atendimentos',
        label: 'Controle de Atendimentos',
        children: [
          {
            value: 'Inclusão',
            label: 'Inclusão',
            children: [
              {
                value: ' Atendimento',
                label: ' Atendimento',
                children: [
                  {
                    value: 'Relatório de clientes',
                    label: 'Relatório de clientes',
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            value: 'Alteração',
            label: 'Alteração',
            children: [
              {
                value: ' Atendimento',
                label: ' Atendimento',
                children: [
                  {
                    value: 'Relatório de clientes',
                    label: 'Relatório de clientes',
                    children: [],
                  },
                ],
              },
              {
                value: ' STA',
                label: ' STA',
                children: [
                  {
                    value: 'Consultar Hospitais',
                    label: 'Consultar Hospitais',
                    children: [],
                  },
                  {
                    value: 'Cadastrar Hospitais',
                    label: 'Cadastrar Hospitais',
                    children: [],
                  },
                ],
              },
              {
                value: ' Triagem Médica',
                label: ' Triagem Médica',
                children: [
                  {
                    value: 'Consulta de patologias',
                    label: 'Consulta de patologias',
                    children: [],
                  },
                  {
                    value: 'Relatório de Triagem Médica',
                    label: 'Relatório de Triagem Médica',
                    children: [],
                  },
                  {
                    value: 'Consulta de médicos',
                    label: 'Consulta de médicos',
                    children: [
                      {
                        value: 'Inclusão',
                        label: 'Inclusão',
                        children: [],
                      },
                      {
                        value: 'Exclusão',
                        label: 'Exclusão',
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                value: ' Dados Reserva',
                label: ' Dados Reserva',
                children: [],
              },
              {
                value: ' Planejamento Transporte',
                label: ' Planejamento Transporte',
                children: [
                  {
                    value: 'Consultar Aeroportos',
                    label: 'Consultar Aeroportos',
                    children: [],
                  },
                  {
                    value: 'Informações dos Aeroportos',
                    label: 'Informações dos Aeroportos',
                    children: [],
                  },
                ],
              },
              {
                value: ' Fretamento de Ambulâncias',
                label: ' Fretamento de Ambulâncias',
                children: [
                  {
                    value: 'Inserir Ambulâncias',
                    label: 'Inserir Ambulâncias',
                    children: [],
                  },
                  {
                    value: 'Consulta de ambulâncias',
                    label: 'Consulta de ambulâncias',
                    children: [],
                  },
                  {
                    value: 'Consulta de médicos',
                    label: 'Consulta de médicos',
                    children: [
                      {
                        value: 'Inclusão',
                        label: 'Inclusão',
                        children: [],
                      },
                      {
                        value: 'Exclusão',
                        label: 'Exclusão',
                        children: [],
                      },
                    ],
                  },
                  {
                    value: 'Consultar Rotas de Ambulâncias',
                    label: 'Consultar Rotas de Ambulâncias',
                    children: [],
                  },
                ],
              },
              {
                value: ' Acionar Transporte Aéreo',
                label: ' Acionar Transporte Aéreo',
                children: [
                  {
                    value: 'Consulta de médicos',
                    label: 'Consulta de médicos',
                    children: [
                      {
                        value: 'Inclusão',
                        label: 'Inclusão',
                        children: [
                          {
                            value: 'Detalhar Imprimir Exportar',
                            label: 'Detalhar Imprimir Exportar',
                            children: [],
                          },
                        ],
                      },
                      {
                        value: 'Exclusão',
                        label: 'Exclusão',
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                value: ' Acomp. Transporte',
                label: ' Acomp. Transporte',
                children: [],
              },
              {
                value: ' Avaliação de Ambulância',
                label: ' Avaliação de Ambulância',
                children: [
                  {
                    value: 'Relatório',
                    label: 'Relatório',
                    children: [],
                  },
                ],
              },
              {
                value: ' Debriefing Pós Voo',
                label: ' Debriefing Pós Voo',
                children: [
                  {
                    value: 'Médico',
                    label: 'Médico',
                    children: [],
                  },
                  {
                    value: 'Enfermeiro',
                    label: 'Enfermeiro',
                    children: [],
                  },
                  {
                    value: 'Piloto 1',
                    label: 'Piloto 1',
                    children: [],
                  },
                  {
                    value: 'Piloto 2',
                    label: 'Piloto 2',
                    children: [],
                  },
                  {
                    value: 'CCV',
                    label: 'CCV',
                    children: [
                      {
                        value: 'Incluir',
                        label: 'Incluir',
                        children: [],
                      },
                      {
                        value: 'Excluir',
                        label: 'Excluir',
                        children: [],
                      },
                    ],
                  },
                  {
                    value: 'Relatório',
                    label: 'Relatório',
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            value: 'Observações do Atendimento',
            label: 'Observações do Atendimento',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Relatório STA',
            label: 'Relatório STA',
            children: [],
          },
          {
            value: 'Histórico',
            label: 'Histórico',
            children: [],
          },
        ],
      },
      {
        value: 'Cotação de Voos',
        label: 'Cotação de Voos',
        children: [
          {
            value: 'Inclusão',
            label: 'Inclusão',
            children: [
              {
                value: 'Cliente Cotação',
                label: 'Cliente Cotação',
                children: [],
              },
              {
                value: 'Cotação de Voos',
                label: 'Cotação de Voos',
                children: [],
              },
              {
                value: 'Pesquisar cliente cotação',
                label: 'Pesquisar cliente cotação',
                children: [],
              },
              {
                value: 'Visualizar Orçamento',
                label: 'Visualizar Orçamento',
                children: [],
              },
              {
                value: 'Imprimir',
                label: 'Imprimir',
                children: [],
              },
              {
                value: 'Informações dos Aeroportos',
                label: 'Informações dos Aeroportos',
                children: [],
              },
            ],
          },
          {
            value: 'Alteração',
            label: 'Alteração',
            children: [
              {
                value: 'Cliente Cotação',
                label: 'Cliente Cotação',
                children: [],
              },
              {
                value: 'Cotação de Voos',
                label: 'Cotação de Voos',
                children: [],
              },
              {
                value: 'Pesquisar cliente cotação',
                label: 'Pesquisar cliente cotação',
                children: [],
              },
              {
                value: 'Visualizar Orçamento',
                label: 'Visualizar Orçamento',
                children: [],
              },
              {
                value: 'Imprimir',
                label: 'Imprimir',
                children: [],
              },
              {
                value: 'Informações dos Aeroportos',
                label: 'Informações dos Aeroportos',
                children: [],
              },
              {
                value: 'Exportar',
                label: 'Exportar',
                children: [],
              },
              {
                value: 'Detalhes da Cotação',
                label: 'Detalhes da Cotação',
                children: [],
              },
            ],
          },
          {
            value: 'Consultar Clientes Cotação',
            label: 'Consultar Clientes Cotação',
            children: [],
          },
          {
            value: 'Observações da cotação',
            label: 'Observações da cotação',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
            ],
          },
        ],
      },
      {
        value: 'Pré Planejamento',
        label: 'Pré Planejamento',
        children: [
          {
            value: 'Imprimir',
            label: 'Imprimir',
            children: [],
          },
        ],
      },
      {
        value: 'Controle de Protocolos',
        label: 'Controle de Protocolos',
        children: [
          {
            value: 'Incluir',
            label: 'Incluir',
            children: [
              {
                value: 'PopUpClienteProtocolo',
                label: 'PopUpClienteProtocolo',
                children: [],
              },
            ],
          },
          {
            value: 'PopUpConsultarHistoricoProtocolo',
            label: 'PopUpConsultarHistoricoProtocolo',
            children: [],
          },
          {
            value: 'Finalizar Protocolo',
            label: 'Finalizar Protocolo',
            children: [],
          },
          {
            value: 'Relatório de Importação A1300',
            label: 'Relatório de Importação A1300',
            children: [],
          },
          {
            value: 'Consultar',
            label: 'Consultar',
            children: [],
          },
          {
            value: 'PopUpIncluirObsProtocolo',
            label: 'PopUpIncluirObsProtocolo',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 'Faturamento',
    label: 'Faturamento',
    children: [
      {
        value: 'Calcular Pré Faturamento',
        label: 'Calcular Pré Faturamento',
        children: [],
      },
      {
        value: 'Gerar Lote Integração ERP',
        label: 'Gerar Lote Integração ERP',
        children: [],
      },
      {
        value: 'Parâmetros Pré Faturamento',
        label: 'Parâmetros Pré Faturamento',
        children: [
          {
            value: 'Incluir',
            label: 'Incluir',
            children: [],
          },
          {
            value: 'Alterar',
            label: 'Alterar',
            children: [],
          },
          {
            value: 'Excluir',
            label: 'Excluir',
            children: [],
          },
        ],
      },
    ],
  },
  {
    value: 'Relatórios',
    label: 'Relatórios',
    children: [
      {
        value: 'Gestão Operacional',
        label: 'Gestão Operacional',
        children: [
          {
            value: 'Relatórios Gerenciais',
            label: 'Relatórios Gerenciais',
            children: [
              {
                value: 'Acompanhamento de Horas de Voo',
                label: 'Acompanhamento de Horas de Voo',
                children: [
                  {
                    value: 'Relatório',
                    label: 'Relatório',
                    children: [],
                  },
                ],
              },
              {
                value: 'Relatório Geral de Atendimentos',
                label: 'Relatório Geral de Atendimentos',
                children: [],
              },
              {
                value: 'Relatório de Voos Particulares',
                label: 'Relatório de Voos Particulares',
                children: [
                  {
                    value: 'Alterar Ajuda',
                    label: 'Alterar Ajuda',
                    children: [],
                  },
                ],
              },
              {
                value: 'Quantidade de Remoções',
                label: 'Quantidade de Remoções',
                children: [],
              },
              {
                value: 'Sinistralidade',
                label: 'Sinistralidade',
                children: [
                  {
                    value: 'Impressão',
                    label: 'Impressão',
                    children: [],
                  },
                ],
              },
              {
                value: 'Atrasos em decolagem',
                label: 'Atrasos em decolagem',
                children: [],
              },
            ],
          },
          {
            value: 'Formulários',
            label: 'Formulários',
            children: [
              {
                value: 'Abastecimento de Aeronaves',
                label: 'Abastecimento de Aeronaves',
                children: [
                  {
                    value: 'Relatório',
                    label: 'Relatório',
                    children: [],
                  },
                  {
                    value: 'Relatório',
                    label: 'Relatório',
                    children: [],
                  },
                  {
                    value: 'Relatório',
                    label: 'Relatório',
                    children: [],
                  },
                ],
              },
              {
                value: 'Autorização Entr Amb. Aeroporto',
                label: 'Autorização Entr Amb. Aeroporto',
                children: [
                  {
                    value: 'Com equipe',
                    label: 'Com equipe',
                    children: [],
                  },
                  {
                    value: 'Sem equipe',
                    label: 'Sem equipe',
                    children: [],
                  },
                ],
              },
              {
                value: 'Autorização Pouso Helicóptero',
                label: 'Autorização Pouso Helicóptero',
                children: [],
              },
              {
                value: 'Capa Voo Particular',
                label: 'Capa Voo Particular',
                children: [
                  {
                    value: 'Relatório',
                    label: 'Relatório',
                    children: [],
                  },
                ],
              },
              {
                value: 'Comunicado de Investimento',
                label: 'Comunicado de Investimento',
                children: [],
              },
              {
                value: 'Contratação de Ambulância',
                label: 'Contratação de Ambulância',
                children: [
                  {
                    value: 'Relatório',
                    label: 'Relatório',
                    children: [],
                  },
                ],
              },
              {
                value: 'Contratação Emp. Subfretamento',
                label: 'Contratação Emp. Subfretamento',
                children: [
                  {
                    value: 'Relatório',
                    label: 'Relatório',
                    children: [],
                  },
                ],
              },
              {
                value: 'Prorrogação de Func. Aeroporto',
                label: 'Prorrogação de Func. Aeroporto',
                children: [
                  {
                    value: 'Relatório',
                    label: 'Relatório',
                    children: [],
                  },
                ],
              },
              {
                value: 'Gerar Contratos Particulares',
                label: 'Gerar Contratos Particulares',
                children: [
                  {
                    value: 'Gerar Contratos Particulares',
                    label: 'Gerar Contratos Particulares',
                    children: [],
                  },
                  {
                    value: 'Gerar Assinatura',
                    label: 'Gerar Assinatura',
                    children: [
                      {
                        value: 'Impressão',
                        label: 'Impressão',
                        children: [],
                      },
                    ],
                  },
                  {
                    value: 'Contrato pessoa jurídica',
                    label: 'Contrato pessoa jurídica',
                    children: [],
                  },
                  {
                    value: 'Contrato pessoa física',
                    label: 'Contrato pessoa física',
                    children: [],
                  },
                  {
                    value: 'Pedido Faturamento',
                    label: 'Pedido Faturamento',
                    children: [],
                  },
                  {
                    value: 'Contrato em branco',
                    label: 'Contrato em branco',
                    children: [],
                  },
                  {
                    value: 'Edição Contratos Particulares',
                    label: 'Edição Contratos Particulares',
                    children: [],
                  },
                ],
              },
              {
                value: 'Rec. Pagto. Voo Particular',
                label: 'Rec. Pagto. Voo Particular',
                children: [
                  {
                    value: 'Relatório',
                    label: 'Relatório',
                    children: [],
                  },
                ],
              },
              {
                value: 'Pedido Faturamento',
                label: 'Pedido Faturamento',
                children: [
                  {
                    value: 'Relatório',
                    label: 'Relatório',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        value: 'Gestão Médica',
        label: 'Gestão Médica',
        children: [
          {
            value: 'Relatório de Triagem Médica',
            label: 'Relatório de Triagem Médica',
            children: [],
          },
          {
            value: 'Relatório de Colaboradores',
            label: 'Relatório de Colaboradores',
            children: [],
          },
        ],
      },
      {
        value: 'Movimentação de Clientes',
        label: 'Movimentação de Clientes',
        children: [
          {
            value: 'Relatório de Importação',
            label: 'Relatório de Importação',
            children: [],
          },
          {
            value: 'Impressão',
            label: 'Impressão',
            children: [],
          },
        ],
      },
      {
        value: 'Pesquisa de Satisfação',
        label: 'Pesquisa de Satisfação',
        children: [],
      },
      {
        value: 'Pré Faturamento',
        label: 'Pré Faturamento',
        children: [
          {
            value: 'Impressão',
            label: 'Impressão',
            children: [],
          },
        ],
      },
      {
        value: 'Relatórios Gerenciais',
        label: 'Relatórios Gerenciais',
        children: [
          {
            value: 'Avaliação de Ambulâncias',
            label: 'Avaliação de Ambulâncias',
            children: [],
          },
          {
            value: 'Relatório',
            label: 'Relatório',
            children: [],
          },
          {
            value: 'Debriefing',
            label: 'Debriefing',
            children: [
              {
                value: 'Impressão',
                label: 'Impressão',
                children: [],
              },
            ],
          },
        ],
      },
      {
        value: 'Movimentação A1300',
        label: 'Movimentação A1300',
        children: [
          {
            value: 'Impressão A1300',
            label: 'Impressão A1300',
            children: [],
          },
          {
            value: 'Relatório de Importação A1300',
            label: 'Relatório de Importação A1300',
            children: [],
          },
        ],
      },
      {
        value: 'Relatórios RN395',
        label: 'Relatórios RN395',
        children: [
          {
            value: 'Rel Analítico',
            label: 'Rel Analítico',
            children: [
              {
                value: 'Relação de Protocolos',
                label: 'Relação de Protocolos',
                children: [],
              },
            ],
          },
        ],
      },
      {
        value: 'Consulta Log de Operações',
        label: 'Consulta Log de Operações',
        children: [],
      },
      {
        value: 'Relatório Escala de Colaboradores',
        label: 'Relatório Escala de Colaboradores',
        children: [],
      },
    ],
  },
  {
    value: 'PopUp',
    label: 'PopUp',
    children: [
      {
        value: 'Aeroportos',
        label: 'Aeroportos',
        children: [],
      },
      {
        value: 'Clientes',
        label: 'Clientes',
        children: [],
      },
      {
        value: 'Médicos',
        label: 'Médicos',
        children: [],
      },
      {
        value: 'Valores de ambulâncias',
        label: 'Valores de ambulâncias',
        children: [],
      },
      {
        value: 'Contratantes',
        label: 'Contratantes',
        children: [],
      },
      {
        value: 'Cidades',
        label: 'Cidades',
        children: [],
      },
      {
        value: 'Informações dos Aeroportos',
        label: 'Informações dos Aeroportos',
        children: [],
      },
      {
        value: 'Responsáveis',
        label: 'Responsáveis',
        children: [],
      },
    ],
  },
  {
    value: 'Atualizações',
    label: 'Atualizações',
    children: [
      {
        value: 'Ajustar GeoLocalização de Empresas',
        label: 'Ajustar GeoLocalização de Empresas',
        children: [],
      },
    ],
  },
  {
    value: 'Comercial',
    label: 'Comercial',
    children: [
      {
        value: 'Cadastros',
        label: 'Cadastros',
        children: [
          {
            value: 'Prêmios',
            label: 'Prêmios',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Tipos de participantes',
            label: 'Tipos de participantes',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Equipes',
            label: 'Equipes',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Participantes',
            label: 'Participantes',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Produto',
            label: 'Produto',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
          {
            value: 'Parametro de Integração',
            label: 'Parametro de Integração',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
        ],
      },
      {
        value: 'Campanhas',
        label: 'Campanhas',
        children: [
          {
            value: 'Cadastrar Metas',
            label: 'Cadastrar Metas',
            children: [
              {
                value: 'Histórico Meta',
                label: 'Histórico Meta',
                children: [],
              },
            ],
          },
          {
            value: 'Incluir',
            label: 'Incluir',
            children: [],
          },
          {
            value: 'Alterar',
            label: 'Alterar',
            children: [],
          },
          {
            value: 'Excluir',
            label: 'Excluir',
            children: [],
          },
          {
            value: 'Cadastrar Campanhas',
            label: 'Cadastrar Campanhas',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Copiar Campanha',
                label: 'Copiar Campanha',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
            ],
          },
          {
            value: 'Ranking de Premiação',
            label: 'Ranking de Premiação',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Histórico',
                label: 'Histórico',
                children: [],
              },
            ],
          },
        ],
      },
      {
        value: 'Vendas',
        label: 'Vendas',
        children: [
          {
            value: 'Lançar',
            label: 'Lançar',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
              {
                value: 'Reabrir',
                label: 'Reabrir',
                children: [],
              },
              {
                value: 'Detalhar',
                label: 'Detalhar',
                children: [],
              },
            ],
          },
          {
            value: 'Apurar',
            label: 'Apurar',
            children: [],
          },
          {
            value: 'Excel - Apurar',
            label: 'Excel - Apurar',
            children: [],
          },
        ],
      },
      {
        value: 'Gerenciar Pagamento de Comissões',
        label: 'Gerenciar Pagamento de Comissões',
        children: [
          {
            value: 'Detalhar Pagamento Comissões',
            label: 'Detalhar Pagamento Comissões',
            children: [],
          },
          {
            value: 'Cancelar Pagamento Comissões',
            label: 'Cancelar Pagamento Comissões',
            children: [],
          },
        ],
      },
      {
        value: 'Relatórios',
        label: 'Relatórios',
        children: [
          {
            value: 'Participantes',
            label: 'Participantes',
            children: [
              {
                value: 'Impressão',
                label: 'Impressão',
                children: [],
              },
              {
                value: 'PDF',
                label: 'PDF',
                children: [],
              },
            ],
          },
          {
            value: 'Vendas',
            label: 'Vendas',
            children: [
              {
                value: 'Impressão',
                label: 'Impressão',
                children: [],
              },
            ],
          },
          {
            value: 'Erros de Importação',
            label: 'Erros de Importação',
            children: [
              {
                value: 'Impressão',
                label: 'Impressão',
                children: [],
              },
              {
                value: 'PDF',
                label: 'PDF',
                children: [],
              },
            ],
          },
          {
            value: 'Comissões',
            label: 'Comissões',
            children: [
              {
                value: 'Impressão',
                label: 'Impressão',
                children: [],
              },
            ],
          },
          {
            value: 'Comparativo Lançamento de Vendas x PTU',
            label: 'Comparativo Lançamento de Vendas x PTU',
            children: [
              {
                value: 'Impressão',
                label: 'Impressão',
                children: [],
              },
            ],
          },
          {
            value: 'Pagamentos',
            label: 'Pagamentos',
            children: [
              {
                value: 'Impressão',
                label: 'Impressão',
                children: [],
              },
            ],
          },
          {
            value: 'Relatório de Compras Não Efetivadas PV',
            label: 'Relatório de Compras Não Efetivadas PV',
            children: [],
          },
          {
            value: 'Relatório Gerencial PV',
            label: 'Relatório Gerencial PV',
            children: [
              {
                value: 'PopUpConsultarDetalhesPlataformaVendas',
                label: 'PopUpConsultarDetalhesPlataformaVendas',
                children: [],
              },
            ],
          },
          {
            value: 'Relatório de Responsáveis Financeiros Cancelados PV',
            label: 'Relatório de Responsáveis Financeiros Cancelados PV',
            children: [
              {
                value: 'Incluir',
                label: 'Incluir',
                children: [],
              },
              {
                value: 'Alterar',
                label: 'Alterar',
                children: [],
              },
              {
                value: 'Excluir',
                label: 'Excluir',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 'Painel Gerencial',
    label: 'Painel Gerencial',
    children: [
      {
        value: 'Cadastros Gerais',
        label: 'Cadastros Gerais',
        children: [
          {
            value: 'Incluir',
            label: 'Incluir',
            children: [],
          },
          {
            value: 'Alterar',
            label: 'Alterar',
            children: [],
          },
          {
            value: 'Excluir',
            label: 'Excluir',
            children: [],
          },
          {
            value: 'Importar',
            label: 'Importar',
            children: [],
          },
        ],
      },
      {
        value: 'Gerar Painel Gráfico',
        label: 'Gerar Painel Gráfico',
        children: [
          {
            value: 'Relatório Carteira',
            label: 'Relatório Carteira',
            children: [],
          },
          {
            value: 'Relatório Índice de Utilização',
            label: 'Relatório Índice de Utilização',
            children: [],
          },
          {
            value: 'Relatório Receita',
            label: 'Relatório Receita',
            children: [],
          },
          {
            value: 'Relatório Despesa',
            label: 'Relatório Despesa',
            children: [],
          },
          {
            value: 'Relatório Tx. Manutenção x Receita',
            label: 'Relatório Tx. Manutenção x Receita',
            children: [],
          },
        ],
      },
      {
        value: 'Gerar Painel Analítico',
        label: 'Gerar Painel Analítico',
        children: [],
      },
    ],
  },
  {
    value: 'Historico',
    label: 'Historico',
    children: [],
  },
  {
    value: 'Historico Parametros SMS',
    label: 'Historico Parametros SMS',
    children: [],
  },
];
