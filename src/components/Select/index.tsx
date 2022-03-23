/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldSet, Legend, SelectStyled } from './styles';

const { Option } = SelectStyled;

interface IProps {
  id?: any;
  label?: string;
  options?: any;
  name?: string;
  onChange?: any;
  onBlur?: any;
  required?: boolean;
  type?: string;
  defaultValue?: number;
  value?: any;
}

const StyledSelect = ({ label, options, ...rest }: IProps) => {
  return (
    <FieldSet>
      <Legend>{label}</Legend>
      <SelectStyled
        getPopupContainer={(trigger: any) => trigger.parentElement}
        {...rest}
      >
        {options?.map(({ id, nome, descricao }) => (
          <Option key={id} value={id}>
            {nome || descricao}
          </Option>
        ))}
      </SelectStyled>
    </FieldSet>
  );
};

export default StyledSelect;
