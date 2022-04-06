import { Button, Col, Table } from 'antd';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const SmallText = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 12px;
  /* display: flex;
  align-items: center; */
  text-transform: uppercase;
  color: ${theme.gray};
`;

export const BoldText = styled(SmallText)`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-transform: none;
`;

export const AntdCol = styled(Col)`
  margin-bottom: 16px;
  margin-right: 2px;
`;

export const HeaderButton = styled(Button)`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;
  height: 40px;
`;

export const QuotationTable = styled(Table)`
  .ant-table {
    background-color: ${theme.background} !important;
  }

  .ant-table-thead {
    .ant-table-cell {
      background-color: ${theme.background} !important;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 9px;
      line-height: 12px;
      text-transform: uppercase;
      color: ${theme.gray};
    }
  }

  .ant-table-thead > tr > th {
    padding-bottom: 0px;
    border-bottom: none;
  }

  /* .ant-table-thead > tr > th, */
  .ant-table-tbody > tr > td {
    border-bottom: 1px solid #e7e7e7;
  }

  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    content: none;
  }

  .ant-table-tbody {
    .ant-table-cell {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      color: ${theme.gray};
    }

    .ant-table-cell-row-hover {
      background-color: ${theme.background} !important;
    }

    tr:last-child > td {
      color: ${theme.primary};
    }
  }
`;
