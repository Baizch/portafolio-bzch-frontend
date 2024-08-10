import React from 'react';

const Header: React.FC = () => (
  <header className='sticky -mt-8 z-50 bg-white dark:bg-sky-600 shadow-md'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center py-4'>
      <nav className='space-x-8'>
        <a
          href='#sobre'
          className='text-gray-800 dark:text-gray-200 hover:text-yellow-300'
        >
          Sobre mim
        </a>
        <a
          href='#tecnologias'
          className='text-gray-800 dark:text-gray-200 hover:text-yellow-300'
        >
          Tecnologias
        </a>
        <a
          href='#projetos'
          className='text-gray-800 dark:text-gray-200 hover:text-yellow-300'
        >
          Projetos
        </a>
        <a
          href='#contato'
          className='text-gray-800 dark:text-gray-200 hover:text-yellow-300'
        >
          Contato
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
