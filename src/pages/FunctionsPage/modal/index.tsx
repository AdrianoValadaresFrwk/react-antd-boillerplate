import { CloseOutlined } from '@ant-design/icons';
import { Button, Input, Form, Modal, Select, Descriptions } from 'antd';
import { useEffect } from 'react';
import {
  FormItem,
  FormItemWithDropDown,
} from '../../NewQuotationPage/components/ClientForm/styles';

const { Option } = Select;
interface CreateEditFunctionsModalProps {
  editMode: boolean;
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values?: any) => void;
  setModalVisible: (value: boolean) => void;
  loading: boolean;
  editData?: any;
}

export default function CreateEditFunctionsModal({
  editMode,
  visible,
  onCancel,
  onSubmit,
  setModalVisible,
  loading,
  editData,
}: CreateEditFunctionsModalProps) {
  const [modalForm] = Form.useForm();

  useEffect(() => {
    if (editMode) {
      console.log(editData);
      modalForm.setFieldsValue({
        description: editData.description,
        status: editData.status,
      });
    } else {
      modalForm.resetFields();
    }
  }, [editMode]);

  return (
    <Modal
      title={<h2> {editMode ? 'Editar Função' : 'Nova Função'}</h2>}
      centered
      visible={visible}
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
      maskClosable={false}
      wrapClassName="app-modal"
      afterClose={() => {
        modalForm.resetFields();
      }}
      closeIcon={<CloseOutlined onClick={onCancel} />}
      footer={[
        <Button key="back" shape="round" type="ghost" onClick={onCancel}>
          Cancelar
        </Button>,
        <Button
          key="submit"
          type="primary"
          shape="round"
          loading={loading}
          onClick={(e) => {
            modalForm.submit();
          }}
          htmlType="submit"
        >
          {editMode ? 'Salvar' : 'Cadastrar'}
        </Button>,
      ]}
    >
      <Form
        name="functionForm"
        form={modalForm}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={(e) => {
          // console.log('finish', e);
          onSubmit({ ...editData, ...e });
        }}
        onFinishFailed={(e) => {
          console.log('fail', e);
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Descrição"
          name="description"
          rules={[
            { required: true, message: 'Por favor insira uma descrição' },
          ]}
        >
          <Input />
        </Form.Item>

        <FormItemWithDropDown style={{ marginBottom: 0 }}>
          <FormItem
            colon={false}
            name="status"
            label="Status"
            rules={[
              { required: true, message: 'Por favor selecione um estado' },
            ]}
            className="doropdown-container"
            style={{ width: '50%' }}
          >
            <Select
              placeholder="Selecione uma opção"
              onChange={(e) => {
                console.log(e);
              }}
              allowClear
            >
              <Option value="Ativo">Ativo</Option>
              <Option value="Inativo">Inativo</Option>
            </Select>
          </FormItem>
        </FormItemWithDropDown>
      </Form>
      <Descriptions>
        <Descriptions.Item label="Data de Inclusão" span={12}>
          12/04/2022 16:51:50
        </Descriptions.Item>
        <Descriptions.Item label="Usuário de Inclusão" span={12}>
          Framework
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
}
