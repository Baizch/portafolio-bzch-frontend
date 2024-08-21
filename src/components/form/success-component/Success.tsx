import React from 'react';
import { Result } from 'antd';

import SectionDivider from '../../divider/Divider';

const Success: React.FC = () => (
  <Result
    status='success'
    title='Mensagem enviada com sucesso'
    subTitle='Recebi sua mensagem, estarei retornando o contato em breve'
    extra={[
      <>
        <SectionDivider />
        <p>Você poderá enviar outra mensagem dentro de pouco</p>
      </>,
    ]}
  />
);

export default Success;
