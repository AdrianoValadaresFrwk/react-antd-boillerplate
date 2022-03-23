import styled from 'styled-components';
import { Select } from 'antd';

export const SelectStyled = styled(Select)`
  width: 100%;
  margin-right: 17px;
  .ant-select-selector {
    height: 100% !important;
    border: none !important;
  }
  .ant-select-selection-placeholder {
    margin: 0 !important;
  }
`;

export const SelectStyledMultiple = styled(SelectStyled)`
  .ant-select-selection-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    border: none;
    border-radius: 15.5px;
    color: #006c4f;
    font-weight: bold;
    background-color: #f0f6f5;
  }
  .anticon {
    display: flex;
    background: #006c4f;
    color: #fff;
    padding: 2px;
    border-radius: 10px;
  }
  .ant-select-selection-overflow {
    overflow-y: auto !important;
    max-height: 70px !important;
  }
  .ant-select-selection-overflow::-webkit-scrollbar {
    width: 10px !important;
    background-color: #f8f8f8 !important;
    border-radius: 5.5px !important;
  }
  .ant-select-selection-overflow::-webkit-scrollbar-thumb {
    background-color: #c4c4c4 !important;
    border-radius: 5.5px !important;
  }
`;

export const FieldSet = styled.fieldset`
  display: flex;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  padding-bottom: 10px;
  position: relative;
`;

export const Legend = styled.legend`
  width: auto;
  margin-left: 16px;
  padding: 0 4px 0;
  color: #828282;
  font-size: 12px;
`;

export const WrapperSelect = styled.div`
  width: 112px;
`;
