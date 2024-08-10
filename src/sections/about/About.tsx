import React from 'react';

const About: React.FC = () => (
  <section
    id='sobre'
    className='-mt-40 h-screen flex flex-col justify-center items-center bg-white p-8'
  >
    <div className='max-w-3xl text-center'>
      <h2 className='text-4xl font-bold text-amber-400 mb-4'>Sobre Mim</h2>
      <p className='text-lg text-amber-500 leading-relaxed mb-6'>
        Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre em
        busca de novos conhecimentos e desafios. Minha formação acadêmica em{' '}
        <strong>Desenvolvimento de Software</strong> me forneceu uma base
        sólida, mas é a minha curiosidade e vontade de aprender que me
        impulsionam a continuar evoluindo.
      </p>
      <p className='text-lg text-amber-500 leading-relaxed mb-6'>
        Acredito que a educação contínua é essencial para o crescimento, tanto
        profissional quanto pessoal. Adoro explorar novas tecnologias,
        frameworks e ferramentas que me ajudem a criar soluções mais eficientes
        e criativas.
      </p>
      <p className='text-lg text-amber-500 leading-relaxed mb-6'>
        Se você tem uma ideia ou projeto em mente, entre em contato! Vamos bater
        um papo e transformar essa ideia em realidade.
      </p>
    </div>
  </section>
);

export default About;
