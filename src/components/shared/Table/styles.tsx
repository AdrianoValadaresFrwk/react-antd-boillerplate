/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import styled from 'styled-components';

const hoverRow = `
tbody tr:hover {
  cursor: pointer;
}
`;

export const StyledTable: React.FC<TableProps<any>> = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: white;
    font-weight: bold;
    font-size: 14px;
  }
  .ant-table-tbody > tr > td {
    font-size: 16px;
    color: #4f4f4f;
  }
  .ant-pagination-item {
    border-radius: 4px;
  }
  .ant-pagination-item-active {
    background: #006c4f;
    border-radius: 4px;
    border-color: #006c4f;
  }
  .ant-pagination-item-active a {
    color: white;
  }

  .ant-pagination-jump-prev
    .ant-pagination-item-container
    .ant-pagination-item-link-icon,
  .ant-pagination-jump-next
    .ant-pagination-item-container
    .ant-pagination-item-link-icon {
    color: #006c4f;
  }
  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    font-size: 10px;
    border-radius: 4px;
  }

  .ant-pagination-item:hover {
    border-color: #006c4f;
  }

  .ant-pagination-item a:hover {
    color: black;
    border-color: #006c4f;
  }

  .ant-pagination-item-active a:hover {
    color: white;
  }

  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    font-size: 10px;
    border-radius: 4px;
    border-color: transparent;
    color: grey;
  }
  .ant-pagination-next:hover {
    border-color: #006c4f;
  }

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: #006c4f;
  }
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: #006c4f78;
  }

  ${(props: TableProps<any>) => {
    const onRowImplementation = props.onRow && props.onRow({});
    if (onRowImplementation?.onClick) {
      return hoverRow;
    }
    return '';
  }}
`;

export const WrapperTable = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 74vw;
`;
