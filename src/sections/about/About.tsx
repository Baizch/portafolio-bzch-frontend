import React from 'react';

import Title from '../../components/title/Title';

const About: React.FC = () => (
  <section
    id='sobre'
    className='-mt-64 h-screen flex flex-col justify-center items-center bg-white p-8'
  >
    <div className='max-w-3xl text-center'>
      <Title title='Sobre mim' />
      <p className='text-lg text-black leading-relaxed mb-6'>
        Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre em
        busca de novos conhecimentos e desafios. Sou formado em{' '}
        <strong>Análise e Desenvolvimento de Sistemas</strong> com 3 anos de
        experiência profissional.
      </p>
      <p className='text-lg text-black leading-relaxed mb-6'>
        Se você tem uma ideia ou projeto em mente, entre em contato! Vamos bater
        um papo e transformar essa ideia em realidade.
      </p>
    </div>
  </section>
);

export default About;
