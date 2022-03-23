import styled from 'styled-components';
import { Select } from 'antd';

export const SelectStyled = styled(Select)`
  width: 100%;
  display: flex;
  align-items: center;
  .ant-select-selector {
    width: 100% !important;
    height: 25px !important;
    border: none !important;
  }
  .ant-select-arrow {
    color: #007071;
  }
`;

export const FieldSet = styled.fieldset`
  display: flex;
  height: 60px;
  padding-bottom: 10px !important;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  position: relative;
`;

export const Legend = styled.legend`
  width: auto;
  margin-left: 16px;
  padding: 0 4px 0;
  color: #828282;
  font-size: 12px;
`;
