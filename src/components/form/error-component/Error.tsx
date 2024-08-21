import React from 'react';
import { Result, Button } from 'antd';

interface ErrorProps {
  setIsResend: (value: boolean) => void;
  handleCancel: () => void;
}

const Error: React.FC<ErrorProps> = ({ setIsResend, handleCancel }) => (
  <Result
    status='error'
    title='Erro ao enviar mensagem'
    subTitle='Ocorreu um erro na hora de enviar sua mensagem, gostaria de tentar novamente?'
    extra={[
      <Button key='resend' onClick={() => setIsResend(true)}>
        Reenviar
      </Button>,
      <Button key='cancel' type='primary' danger onClick={handleCancel}>
        Cancelar
      </Button>,
    ]}
  />
);

export default Error;
