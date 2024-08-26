import React from 'react';
import { Button, Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import { scrollToSection } from '../../utils/scrollToSection';

import Title from '../../components/title/Title';

const About: React.FC = () => (
  <section id='sobre' className='bg-white py-12'>
    <div className='max-w-5xl mx-auto px-4'>
      <Title title='Sobre mim' />
      <p className='text-lg text-black leading-relaxed mb-6'>
        Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre em
        busca de novos conhecimentos e desafios. Sou formado em{' '}
        <strong>Análise e Desenvolvimento de Sistemas</strong> e conto com 3
        anos de experiência profissional.
      </p>
      <p className='text-lg text-black leading-relaxed mb-6'>
        Se você tem uma ideia ou projeto em mente, entre em contato! Vamos bater
        um papo e transformar essa ideia em realidade.
      </p>
      <Space>
        <a href='/CV_Franco_Baisch.pdf' download='curriculo_franco_baisch.pdf'>
          <Button size='large' icon={<DownloadOutlined />}>
            Baixar CV
          </Button>
        </a>
        <Button size='large' onClick={() => scrollToSection('contato')}>
          Entrar em contato
        </Button>
      </Space>
    </div>
  </section>
);

export default About;
