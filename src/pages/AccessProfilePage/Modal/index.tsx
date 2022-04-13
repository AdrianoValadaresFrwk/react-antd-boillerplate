import { Button } from 'antd';
import { boolean } from 'yup';

import { roles } from '../MockedData';
import { ModalComponent, CascaderComponent, InputComponent, InputWrapper, Label } from './styles';

interface IProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
}

export default function Modal({ visible, onOk, onCancel }:IProps){
  function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  }
  
  function filter(inputValue, path) {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  }

  return (
    <ModalComponent visible={visible} onOk={onOk} onCancel={onCancel} footer={[
      <Button type="ghost" shape="round" onClick={onCancel}>Cancelar</Button>,
      <Button type="primary" shape="round" onClick={onOk}>Salvar</Button>
    ]}>
      <InputWrapper>
        <Label htmlFor="description">Descrição: </Label>
        <InputComponent id="description" />
      </InputWrapper>
      <CascaderComponent
      options={roles}
      onChange={onChange}
      placeholder="Selecionar"
      showSearch={{filter}}
      onSearch={value => console.log(value)}
      />
    </ModalComponent>
  );
}