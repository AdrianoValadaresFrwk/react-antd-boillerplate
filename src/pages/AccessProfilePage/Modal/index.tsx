import { Button, Form, Input } from 'antd';
import React from 'react';

import { roles } from '../MockedData';
import { AccessProfileModal , CascaderComponent } from './styles';

interface AccessProfileModalInterface {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
}

export default function Modal({ visible, onOk, onCancel }:AccessProfileModalInterface){
  function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  }
  
  function filter(inputValue, path) {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  }

  return (
    <AccessProfileModal title={<h2>Novo Perfil de Acesso</h2>} visible={visible} onOk={onOk} onCancel={onCancel} footer={[
      <Button type="ghost" shape="round" onClick={onCancel}>Cancelar</Button>,
      <Button type="primary" shape="round" onClick={onOk}>Salvar</Button>
    ]} wrapClassName="app-modal">
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={(e) => {
          console.log(e);
          
        }}
        onFinishFailed={(e) => {
          console.log(e);
        }}
        autoComplete="off"
      >
        <Form.Item
              label="Descrição"
              name="description"
              rules={[
                  { required: true, message: 'Por favor informe a descrição!' },
                ]}
              >
                <Input />
        </Form.Item>
        <Form.Item
          label="Tipo de acesso"
          name="accessType"
          rules={[
              { required: true, message: 'Por favor selecione ou pesquise o tipo de acesso!' },
            ]}
        >
          <CascaderComponent
          options={roles}
          onChange={onChange}
          placeholder="Selecionar"
          showSearch={{filter}}
          onSearch={value => console.log(value)}
          />
        </Form.Item>
      </Form>
    </AccessProfileModal >
  );
}