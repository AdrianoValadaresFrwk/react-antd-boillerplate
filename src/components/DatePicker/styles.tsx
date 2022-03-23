import styled from 'styled-components';
import { DatePicker } from 'antd';
import { DatePickerProps } from 'antd/lib/date-picker';

export const StyledDatePicker: React.FC<DatePickerProps> = styled(DatePicker)`
  width: 100%;
  border: none;
  .ant-picker-panel-container {
    position: absolute
    z-index: auto;
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
