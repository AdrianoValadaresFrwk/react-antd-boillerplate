import React from 'react';

import { FieldSet, Legend, StyledTimePicker } from './styles';

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
  const format = 'HH:mm';
  return (
    <FieldSet>
      <Legend>{label}</Legend>
      <StyledTimePicker
        getPopupContainer={(trigger: any) => trigger.parentElement}
        format={format}
        placeholder=""
        {...rest}
      />
    </FieldSet>
  );
};

export default DatePicker;
