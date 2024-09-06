import React from 'react';
import { Result, Button } from 'antd';

import { DarkModeProps } from '../../../common/interfaces';

interface ErrorProps extends DarkModeProps {
  setIsResend: (value: boolean) => void;
  handleCancel: () => void;
}

const Error = ({ setIsResend, handleCancel, isDarkMode }: ErrorProps) => (
  <Result
    status='error'
    title='Erro ao enviar mensagem'
    subTitle='Ocorreu um erro na hora de enviar sua mensagem, gostaria de tentar novamente?'
    extra={[
      <button
        key='resend'
        onClick={() => setIsResend(true)}
        className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${
          isDarkMode ? 'text-white' : 'text-black'
        } font-bold py-3 px-4 rounded-full border border-gray-300 shadow ${
          isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
        } mt-4`}
      >
        Reenviar
      </button>,
      <button
        key='cancel'
        onClick={handleCancel}
        className={`bg-red-600 text-white font-bold py-3 px-4 rounded-full border border-gray-300 shadow hover:bg-red-500 mt-4`}
      >
        Cancelar
      </button>,
    ]}
  />
);

export default Error;
