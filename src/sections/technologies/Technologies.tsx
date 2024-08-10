import React from 'react';

const Technologies: React.FC = () => (
  <section id='tecnologias' className='bg-white py-12'>
    <div className='max-w-5xl mx-auto px-4'>
      <div className='border-t-4 border-sky-200 mb-8'></div>

      <h2 className='text-3xl font-bold text-amber-400 mb-8 text-center'>
        Tecnologias
      </h2>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
        <p className='text-lg font-semibold text-amber-500'>JavaScript</p>
        <p className='text-lg font-semibold text-amber-500'>TypeScript</p>
        <p className='text-lg font-semibold text-amber-500'>Java</p>
        <p className='text-lg font-semibold text-amber-500'>React</p>
        <p className='text-lg font-semibold text-amber-500'>React Native</p>
        <p className='text-lg font-semibold text-amber-500'>Redux</p>
        <p className='text-lg font-semibold text-amber-500'>Next.js</p>
        <p className='text-lg font-semibold text-amber-500'>TailwindCSS</p>
        <p className='text-lg font-semibold text-amber-500'>SASS</p>
        <p className='text-lg font-semibold text-amber-500'>Node.js</p>
        <p className='text-lg font-semibold text-amber-500'>Express.js</p>
        <p className='text-lg font-semibold text-amber-500'>Nest.js</p>
        <p className='text-lg font-semibold text-amber-500'>MySQL</p>
        <p className='text-lg font-semibold text-amber-500'>PostgreSQL</p>
        <p className='text-lg font-semibold text-amber-500'>
          Docker & Docker Compose
        </p>
      </div>
    </div>
  </section>
);

export default Technologies;
