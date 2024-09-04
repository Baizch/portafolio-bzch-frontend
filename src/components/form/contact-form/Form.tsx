import React, { useState } from 'react';
import { Form } from 'antd';
import emailjs from '@emailjs/browser';

import Success from '../success-component/Success';
import Error from '../error-component/Error';
import InitialForm from '../empty-form/InitialForm';
import ResendForm from '../resend-form/ResendForm';

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

interface ContactFormProps {
  isDarkMode: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isDarkMode }) => {
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
          sendEmail={sendEmail}
          isDarkMode={isDarkMode}
        />
      )}

      {isResend && !isSuccess && (
        <ResendForm
          formData={formData}
          isSubmitting={isSubmitting}
          sendEmail={sendEmail}
          isDarkMode={isDarkMode}
        />
      )}
    </>
  );
};

export default ContactForm;
