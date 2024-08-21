import React, { useRef, useState } from 'react';
import { Form, Input, Button, Spin, Result } from 'antd';
import emailjs from '@emailjs/browser';

import Success from '../success-component/Success';
import Error from '../error-component/Error';
import InitialForm from '../empty-form/InitialForm';

const { TextArea } = Input;

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formInstance] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isResend, setIsResend] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isEmptyForm, setIsEmptyForm] = useState<boolean>(true);

  const sendEmail = (values: any) => {
    setIsSubmitting(true);

    setFormData({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      subject: values.subject,
      message: values.message,
    });

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((result: any) => {
        console.log('Mensagem enviada com sucesso!', result);
        setIsSubmitting(false);
        setIsSuccess(true);
      })
      .catch((error: any) => {
        console.log('Erro ao enviar a mensagem. Por favor, tente novamente.');
        console.log('Erro:', error.text);
        setIsSubmitting(false);
        setIsError(true);
      });
  };

  const handleCancel = () => {
    setFormData(null);
    setIsEmptyForm(true);
    setIsError(false);
    formInstance.resetFields();
  };

  return (
    <>
      {isSuccess && <Success />}

      {isError && !isResend && (
        <Error setIsResend={setIsResend} handleCancel={handleCancel} />
      )}

      {!isSuccess && !isError && isEmptyForm && (
        <InitialForm
          formData={formData}
          setFormData={setFormData}
          isSubmitting={isSubmitting}
          setIsError={setIsError}
        />
      )}

      {/* componente de formulario com dados */}
      {isResend && !isSuccess && (
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
            rules={[
              { required: true, message: 'Por favor, insira o assunto!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Mensagem'
            name='message'
            rules={[
              { required: true, message: 'Por favor, insira sua mensagem!' },
            ]}
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
      )}
    </>
  );
};

export default ContactForm;
