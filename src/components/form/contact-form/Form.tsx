import React, { useState } from 'react';
import { Form } from 'antd';
import emailjs from '@emailjs/browser';

import { DarkModeProps, IContactFormData } from '../../../common/interfaces';

import Success from '../success-component/Success';
import Error from '../error-component/Error';
import InitialForm from '../empty-form/InitialForm';
import ResendForm from '../resend-form/ResendForm';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

const ContactForm = ({ isDarkMode }: DarkModeProps) => {
  const [formInstance] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isResend, setIsResend] = useState<boolean>(false);
  const [contactFormData, setContactFormData] = useState<IContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isEmptyForm, setIsEmptyForm] = useState<boolean>(true);

  const sendEmail = (values: any) => {
    setIsSubmitting(true);

    const updatedContactFormData: Record<string, unknown> = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    setContactFormData(updatedContactFormData);

    emailjs
      .send(serviceId, templateId, updatedContactFormData, userId)
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
    setContactFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsEmptyForm(true);
    setIsError(false);
    formInstance.resetFields();
  };

  return (
    <>
      {isSuccess && <Success />}

      {isError && !isResend && (
        <Error
          setIsResend={setIsResend}
          handleCancel={handleCancel}
          isDarkMode={isDarkMode}
        />
      )}

      {!isSuccess && !isError && isEmptyForm && (
        <InitialForm
          contactFormData={contactFormData}
          setContactFormData={setContactFormData}
          isSubmitting={isSubmitting}
          sendEmail={sendEmail}
          isDarkMode={isDarkMode}
        />
      )}

      {isResend && !isSuccess && (
        <ResendForm
          contactFormData={contactFormData}
          isSubmitting={isSubmitting}
          sendEmail={sendEmail}
          isDarkMode={isDarkMode}
        />
      )}
    </>
  );
};

export default ContactForm;
