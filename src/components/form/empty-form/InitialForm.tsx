import React, { useRef } from 'react';
import { Form, Input, Spin } from 'antd';

import { DarkModeProps, IContactFormData } from 'src/common/interfaces';

const { TextArea } = Input;

interface InitialFormProps extends DarkModeProps {
  contactFormData: IContactFormData | null;
  setContactFormData: (contactFormData: IContactFormData) => void;
  isSubmitting: boolean;
  sendEmail: (values: any) => void;
}

const InitialForm = ({
  contactFormData,
  setContactFormData,
  isSubmitting,
  sendEmail,
  isDarkMode,
}: InitialFormProps) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formInstance] = Form.useForm();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = event.target.getAttribute('id');

    setContactFormData({
      ...contactFormData,
      [fieldName]: event.target.value,
    });
  };

  return (
    <Form
      form={formInstance}
      ref={form}
      name='contact'
      onFinish={sendEmail}
      layout='vertical'
      autoComplete='off'
    >
      <Form.Item
        label='Nome'
        name='firstName'
        rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
      >
        <Input
          id='firstName'
          onChange={onChangeHandler}
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
          id='lastName'
          onChange={onChangeHandler}
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
          id='email'
          onChange={onChangeHandler}
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
          id='subject'
          onChange={onChangeHandler}
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
          id='message'
          onChange={onChangeHandler}
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

export default InitialForm;
