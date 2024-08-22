import React, { useRef } from 'react';
import { Form, Input, Button, Spin } from 'antd';

const { TextArea } = Input;

interface ResendFormProps {
  formData: FormData | null;
  isSubmitting: boolean;
  sendEmail: (values: any) => void;
}

const ResendForm: React.FC<ResendFormProps> = ({
  formData,
  isSubmitting,
  sendEmail,
}) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formInstance] = Form.useForm();

  return (
    <Form
      form={formInstance}
      ref={form}
      name='contact'
      onFinish={sendEmail}
      layout='vertical'
      autoComplete='off'
      initialValues={formData}
    >
      <Form.Item
        label='Nome'
        name='firstName'
        rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Sobrenome'
        name='lastName'
        rules={[
          { required: true, message: 'Por favor, insira seu sobrenome!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Email'
        name='email'
        rules={[
          { required: true, message: 'Por favor, insira seu email!' },
          {
            type: 'email',
            message: 'Por favor, insira um e-mail válido!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Assunto'
        name='subject'
        rules={[{ required: true, message: 'Por favor, insira o assunto!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Mensagem'
        name='message'
        rules={[{ required: true, message: 'Por favor, insira sua mensagem!' }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        {!isSubmitting && (
          <Button
            type='primary'
            htmlType='submit'
            className='bg-sky-500 text-white py-6 mt-4'
          >
            Enviar
          </Button>
        )}
        {isSubmitting && <Spin size='large' className='mt-4' />}
      </Form.Item>
    </Form>
  );
};

export default ResendForm;
