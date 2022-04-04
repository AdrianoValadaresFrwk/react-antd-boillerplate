import styled from 'styled-components';
import { Input, Form } from 'antd';
import { theme } from '../../../../styles/theme';

export const FormItem = styled(Form.Item)`
  .ant-form-item-label label {
    color: ${theme.secondary} !important;
    font-family: 'Open Sans';
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 12px !important;
    line-height: 16px !important;
  }
  .ant-input {
    background-color: ${theme.inputBackground} !important;
  }
  .same-row .ant-form-item-control-input-content {
    display: flex !important;
  }
`;

export const FormItemWithDropDown = styled(Form.Item)`
  .ant-form-item-label {
    text-align: left !important;
  }
  .ant-form-item-label label {
    color: ${theme.secondary} !important;
    font-family: 'Open Sans';
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 12px !important;
    line-height: 16px !important;
  }
  .ant-input {
    background-color: ${theme.inputBackground} !important;
  }
  .ant-form-item-control-input-content {
    display: flex !important;
  }
  .doropdown-container {
    flex-direction: column;
  }
`;
