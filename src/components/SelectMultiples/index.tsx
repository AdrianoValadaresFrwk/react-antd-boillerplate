import {
  FieldSet,
  Legend,
  SelectStyled,
  SelectStyledMultiple,
  WrapperSelect,
} from './styles';

const { Option } = SelectStyled;

interface IProps {
  label?: string;
  option?: any;
  multiOption?: any;
  onBlur?: any;
  name?: string;
  id?: string;
  required?: boolean;
  type?: string;
  defaultValue?: any;
  onChangeSelect?: any;
  onChange?: any;
  select?: boolean;
  value?: any;
}

const SelectMultiples = ({
  label,
  option,
  multiOption,
  onChangeSelect,
  onChange,
  select,
  value,
  ...rest
}: IProps) => {
  return (
    <FieldSet>
      <Legend>{label}</Legend>
      {select && (
        <WrapperSelect>
          <SelectStyled
            getPopupContainer={(trigger: any) => trigger.parentElement}
            {...rest}
            defaultValue="Tipos"
            onChange={(e) => onChangeSelect({ tipo: e })}
          >
            {option?.map((item) => {
              return (
                <Option key={item.value} value={item.value}>
                  {item.type}
                </Option>
              );
            })}
          </SelectStyled>
        </WrapperSelect>
      )}
      <SelectStyledMultiple
        getPopupContainer={(trigger: any) => trigger.parentElement}
        mode="multiple"
        placeholder="Selecionar"
        onChange={(e) => onChange(e)}
        value={value}
      >
        {multiOption?.map((item) => {
          return (
            <Option key={item.id} value={item.id}>
              {item.descricao}
            </Option>
          );
        })}
      </SelectStyledMultiple>
    </FieldSet>
  );
};

export default SelectMultiples;
