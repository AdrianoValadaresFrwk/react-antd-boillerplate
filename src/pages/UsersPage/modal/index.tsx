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

interface CreateEditUserModalInterface {
  editMode: boolean;
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values?: any) => void;
  setModalVisible: (value: boolean) => void;
  loading: boolean;
  editData?: any;
}
export default function CreateEditUsersModal({
  editMode,
  visible,
  onCancel,
  onSubmit,
  setModalVisible,
  loading,
  editData,
}: CreateEditUserModalInterface) {
  const [modalForm] = Form.useForm();
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  const accessProfiles = [
    { cod: 1, description: 'Funcionário', status: 'Inativo' },
    { cod: 2, description: 'Administrador Geral', status: 'Ativo' },
  ];

  useEffect(() => {
    if (editMode) {
      console.log(editData);
      modalForm.setFieldsValue({
        description: editData.description,
        status: editData.status,
        name: editData.name,
        userName: editData.userName,
        function: editData.function,
        email: editData.email,
        expireDate: moment(editData.expireDate, dateFormatList[0]),
      });
      // accessProfiles = editData.profiles;
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
          e.profiles = accessProfiles;
          console.log('finish', e);
          onSubmit({ ...editData, ...e });
        }}
        onFinishFailed={(e) => {
          console.log('fail', e);
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, message: 'Por favor insira um nome' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Login"
          name="userName"
          rules={[{ required: true, message: 'Por favor insira um username' }]}
        >
          <Input />
        </Form.Item>

        <FormItemWithDropDown style={{ marginBottom: 0 }}>
          <FormItem
            colon={false}
            name="function"
            label="Função"
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
              <Option value="Desenvolvedor">Desenvolvedor</Option>
              <Option value="Médico">Médico</Option>
            </Select>
          </FormItem>
        </FormItemWithDropDown>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Por favor insira um email' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Data limite"
          name="expireDate"
          rules={[{ required: true, message: 'Por favor insira um email' }]}
        >
          <DatePicker
            defaultValue={moment('01/01/2015', dateFormatList[0])}
            format={dateFormatList}
          />
        </Form.Item>

        <Form.Item
          label="Perfis de acesso"
          name="profiles"
          rules={[
            {
              validator: (rule, value, callBack) => {
                if (accessProfiles.length <= 0) {
                  return Promise.reject(
                    'Por favor adicione pelo menos um perfil'
                  );
                } else {
                  return Promise.resolve('ok');
                }
              },
              message: 'Por favor adicione pelo menos um perfil',
            },
          ]}
        >
          <List
            header={
              <div className="d-flex justify-content-between align-items-center">
                <h3 style={{ margin: 0 }}>Código / Descrição</h3>
                <div>
                  <Button shape="round" type="primary" icon={<PlusOutlined />}>
                    Incluir
                  </Button>
                </div>
              </div>
            }
            bordered
            dataSource={accessProfiles}
            renderItem={(item) => (
              <List.Item>
                {item.cod}
                <Typography.Text mark> / </Typography.Text>
                {item.description}
              </List.Item>
            )}
          />
        </Form.Item>
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
