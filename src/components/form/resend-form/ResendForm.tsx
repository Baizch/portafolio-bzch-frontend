import React, { useRef } from 'react';
import { Form, Input, Button, Spin } from 'antd';

const { TextArea } = Input;

interface ResendFormProps {
  formData: FormData | null;
  isSubmitting: boolean;
  sendEmail: (values: any) => void;
  isDarkMode: boolean;
}

const ResendForm: React.FC<ResendFormProps> = ({
  formData,
  isSubmitting,
  sendEmail,
  isDarkMode,
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
        <Input
          className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${
            isDarkMode ? 'focus:bg-gray-800' : 'bg-white'
          } ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-white'}`}
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
          className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${
            isDarkMode ? 'focus:bg-gray-800' : 'bg-white'
          } ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-white'}`}
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
          className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${
            isDarkMode ? 'focus:bg-gray-800' : 'bg-white'
          } ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-white'}`}
        />
      </Form.Item>

      <Form.Item
        label='Assunto'
        name='subject'
        rules={[{ required: true, message: 'Por favor, insira o assunto!' }]}
      >
        <Input
          className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${
            isDarkMode ? 'focus:bg-gray-800' : 'bg-white'
          } ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-white'}`}
        />
      </Form.Item>

      <Form.Item
        label='Mensagem'
        name='message'
        rules={[{ required: true, message: 'Por favor, insira sua mensagem!' }]}
      >
        <TextArea
          rows={4}
          className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${
            isDarkMode ? 'focus:bg-gray-800' : 'bg-white'
          } ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-white'}`}
        />
      </Form.Item>

      <Form.Item>
        {!isSubmitting && (
          <button
            type='primary'
            htmlType='submit'
            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${
              isDarkMode ? 'text-white' : 'text-black'
            } font-bold py-3 px-4 rounded-full border border-gray-300 shadow ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            } mt-4`}
          >
            Enviar
          </button>
        )}
        {isSubmitting && <Spin size='large' className='mt-4' />}
      </Form.Item>
    </Form>
  );
};

export default ResendForm;
