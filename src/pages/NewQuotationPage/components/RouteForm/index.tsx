import { Input, Form } from 'antd';
import { FormItem } from '../ClientForm/styles';

export default function RouteForm() {
  return (
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
      <FormItem
        label="Nome do cliente"
        name="user"
        rules={[
          {
            required: true,
            message: 'Por favor informe seu login!',
          },
        ]}
      >
        <Input />
      </FormItem>
      <FormItem style={{ marginBottom: 0 }}>
        <FormItem
          colon={false}
          label="Tipo de contratante"
          name="year"
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
          }}
        >
          <Input />
        </FormItem>
        <FormItem
          colon={false}
          label="CPF/CNPJ"
          name="month"
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
            margin: '0 8px',
          }}
        >
          <Input />
        </FormItem>
      </FormItem>
      <FormItem
        label="Nome do contato"
        name="user"
        rules={[
          {
            required: true,
            message: 'Por favor informe seu login!',
          },
        ]}
      >
        <Input />
      </FormItem>
      <FormItem style={{ marginBottom: 0 }}>
        <FormItem
          colon={false}
          label="Telefone"
          name="year"
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
          }}
        >
          <Input />
        </FormItem>
        <FormItem
          colon={false}
          label="Celular"
          name="month"
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
            margin: '0 8px',
          }}
        >
          <Input />
        </FormItem>
      </FormItem>
      <FormItem
        label="Email"
        name="user"
        rules={[
          {
            required: true,
            message: 'Por favor informe seu login!',
          },
        ]}
      >
        <Input />
      </FormItem>
      <div style={{ marginBottom: 12 }}>
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: '#333333',
          }}
        >
          Endereço
        </span>
      </div>
      <FormItem
        label="CEP"
        name="user"
        rules={[
          {
            required: true,
            message: 'Por favor informe seu login!',
          },
        ]}
      >
        <Input />
      </FormItem>
      <FormItem
        label="Logradouro"
        name="user"
        rules={[
          {
            required: true,
            message: 'Por favor informe seu login!',
          },
        ]}
      >
        <Input />
      </FormItem>
      <FormItem style={{ marginBottom: 0 }}>
        <FormItem
          colon={false}
          label="Número"
          name="year"
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
          }}
        >
          <Input />
        </FormItem>
        <FormItem
          colon={false}
          label="Complemento"
          name="month"
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
            margin: '0 8px',
          }}
        >
          <Input />
        </FormItem>
      </FormItem>
    </Form>
  );
}
