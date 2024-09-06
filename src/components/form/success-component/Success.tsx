import React from 'react';
import { Result } from 'antd';

const Success = () => (
  <Result
    status='success'
    title='Mensagem enviada com sucesso'
    subTitle='Recebi sua mensagem, estarei retornando o contato em breve'
  />
);

export default Success;
