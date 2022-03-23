import { FieldSet, Legend, MaskStyledInputPercent } from './styles';

interface IProps {
  label?: string;
  type?: 'text';
  name?: string;
  value?: string | number;
  id?: string;
  required?: boolean;
  onChange?: any;
  onBlur?: any;
}

const StyledPerCentInput = ({
  type,
  label,
  name,
  value,
  id,
  required,
  onChange,
  onBlur,
}: IProps) => {
  return (
    <FieldSet>
      <Legend>{label}</Legend>
      <MaskStyledInputPercent
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        format="### %"
        placeholder="00 %"
      />
    </FieldSet>
  );
};

export default StyledPerCentInput;
