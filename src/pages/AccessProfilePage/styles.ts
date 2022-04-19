import { Table } from 'antd';
import styled from 'styled-components';

export const TableComponent = styled(Table)`
  table {
    tr {
      td:first-child {
        width: 2%;
        text-align: center;
        font-weight: bold;
      }
      .action-icons {
        span {
          cursor: pointer;
          margin-right: 20px;
        }
        span:last-child {
          margin-right: 0;
        }
        svg + svg {
          color: red;
        }
      }
    }
  }
`;
