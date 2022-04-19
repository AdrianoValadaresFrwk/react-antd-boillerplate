import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Descriptions,
  Form,
  Input,
  List,
  Modal,
  Select,
  Typography,
} from 'antd';
import { useEffect } from 'react';
import moment from 'moment';
import {
  FormItem,
  FormItemWithDropDown,
} from '../../NewQuotationPage/components/ClientForm/styles';

const { Option } = Select;

interface CreateEditCityModalInterface {
  editMode: boolean;
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values?: any) => void;
  setModalVisible: (value: boolean) => void;
  loading: boolean;
  editData?: any;
}
export default function CreateEditCitiesModal({
  editMode,
  visible,
  onCancel,
  onSubmit,
  setModalVisible,
  loading,
  editData,
}: CreateEditCityModalInterface) {
  const [modalForm] = Form.useForm();

  useEffect(() => {
    if (editMode) {
      console.log(editData);
      modalForm.setFieldsValue({
        description: editData.description,
        country: editData.country,
        state: editData.state,
      });
    } else {
      modalForm.resetFields();
    }
  }, [editMode]);

  return (
    <Modal
      title={<h2> {editMode ? 'Editar Usuário' : 'Novo Usuário'}</h2>}
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
        name="userForm"
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
          rules={[{ required: true, message: 'Por favor insira um nome' }]}
        >
          <Input />
        </Form.Item>

        <FormItemWithDropDown style={{ marginBottom: 0 }}>
          <FormItem
            colon={false}
            name="country"
            label="País"
            rules={[
              { required: true, message: 'Por favor selecione uma função' },
            ]}
            className="doropdown-container"
            style={{ width: '50%' }}
          >
            <Select
              placeholder="Selecione uma função"
              onChange={(e) => {
                console.log(e);
              }}
              allowClear
            >
              <Option value="Brasil">Brasil</Option>
            </Select>
          </FormItem>
        </FormItemWithDropDown>

        <FormItemWithDropDown style={{ marginBottom: 0 }}>
          <FormItem
            colon={false}
            name="state"
            label="Estado"
            rules={[
              { required: true, message: 'Por favor selecione uma função' },
            ]}
            className="doropdown-container"
            style={{ width: '50%' }}
          >
            <Select
              placeholder="Selecione uma função"
              onChange={(e) => {
                console.log(e);
              }}
              allowClear
            >
              <Option value="São Paulo">São Paulo</Option>
              <Option value="Rio de Janeiro">Rio de Janeiro</Option>
            </Select>
          </FormItem>
        </FormItemWithDropDown>

        {/* <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Por favor insira um email' }]}
        >
          <Input />
        </Form.Item> */}
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
