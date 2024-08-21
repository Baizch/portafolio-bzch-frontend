import React, { useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

interface InitialFormProps {
  formData: FormData | null;
  setFormData: (formData: FormData) => void;
  isSubmitting: boolean;
  setIsError: (error: boolean) => void;
}

const InitialForm: React.FC<InitialFormProps> = ({
  formData,
  setFormData,
  isSubmitting,
  setIsError,
}) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formInstance] = Form.useForm();

  return (
    <Form
      form={formInstance}
      ref={form}
      name='contact'
      // onFinish={sendEmail}
      layout='vertical'
      autoComplete='off'
    >
      <Form.Item
        label='Nome'
        name='firstName'
        rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
      >
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
      </Form.Item>

      <Form.Item
        label='Sobrenome'
        name='lastName'
        rules={[
          { required: true, message: 'Por favor, insira seu sobrenome!' },
        ]}
      >
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
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
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
      </Form.Item>

      <Form.Item
        label='Assunto'
        name='subject'
        rules={[{ required: true, message: 'Por favor, insira o assunto!' }]}
      >
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, subject: e.target.value });
          }}
        />
      </Form.Item>

      <Form.Item
        label='Mensagem'
        name='message'
        rules={[{ required: true, message: 'Por favor, insira sua mensagem!' }]}
      >
        <TextArea
          rows={4}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, message: e.target.value });
          }}
        />
      </Form.Item>

      <Form.Item>
        {!isSubmitting && (
          <Button
            type='primary'
            htmlType='submit'
            className='bg-sky-500 text-white py-6 mt-4'
            onClick={() => setIsError(true)}
          >
            Enviar
          </Button>
        )}
        {isSubmitting && <Spin size='large' className='mt-4' />}
      </Form.Item>
    </Form>
  );
};

export default InitialForm;
