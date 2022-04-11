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
      .action-icons{
        span {
          cursor: pointer;
        }
        span:first-child {
          margin-right: 20px;
        }
        svg + svg {
          color: red;
        }
      }
     }
   }
`;