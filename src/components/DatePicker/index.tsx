/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { FieldSet, Legend, StyledDatePicker } from './styles';

interface IProps {
  label: string;
  onChange?: any;
  id?: any;
  name?: any;
  onBlur?: any;
  required?: boolean;
  value?: any;
  defaultValue?: any;
  format?: string;
}

const DatePicker = ({ label, ...rest }: IProps) => {
  return (
    <FieldSet>
      <Legend>{label}</Legend>
      <StyledDatePicker
        placeholder=""
        {...rest}
        disabledDate={(current) => {
          return current && current.valueOf() < Date.now();
        }}
        getPopupContainer={(trigger: any) => trigger.parentNode}
      />
    </FieldSet>
  );
};

export default DatePicker;
