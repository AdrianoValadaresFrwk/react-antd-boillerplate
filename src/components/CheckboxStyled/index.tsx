import { StyledCheckbox } from './styles';

interface IProps {
  label?: string;
  name?: string;
  id?: string;
  required?: boolean;
  onChange?: any;
  value?: boolean;
  defaultChecked?: boolean;
}

const Checkbox = ({ label, value, ...rest }: IProps) => {
  return (
    <StyledCheckbox {...rest} checked={value}>
      {label}
    </StyledCheckbox>
  );
};

export default Checkbox;
