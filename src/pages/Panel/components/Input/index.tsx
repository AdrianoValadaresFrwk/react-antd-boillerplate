import React from 'react';

import { FieldSet, Legend, StyledInput } from './styles';

interface IProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange(event: React.FormEvent<HTMLInputElement>): any;
}

const Input = ({ type, label, name, value, onChange }: IProps) => {
  return (
    <FieldSet>
      <Legend>{label}</Legend>
      <StyledInput type={type} name={name} value={value} onChange={onChange} />
    </FieldSet>
  );
};

export default Input;
