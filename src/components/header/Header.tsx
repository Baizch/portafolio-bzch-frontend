import React from 'react';

import { scrollToSection } from '../../utils/scrollToSection';

const Header: React.FC = () => (
  <header className='sticky top-0 z-50 bg-white dark:bg-sky-600 shadow-md'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center py-4'>
      <nav className='space-x-8'>
        <button
          className='text-gray-800 dark:text-gray-200 hover:text-yellow-300'
          onClick={() => scrollToSection('sobre')}
        >
          Sobre mim
        </button>
        <button
          className='text-gray-800 dark:text-gray-200 hover:text-yellow-300'
          onClick={() => scrollToSection('tecnologias')}
        >
          Tecnologias
        </button>
        <button
          className='text-gray-800 dark:text-gray-200 hover:text-yellow-300'
          onClick={() => scrollToSection('projetos')}
        >
          Projetos
        </button>
        <button
          className='text-gray-800 dark:text-gray-200 hover:text-yellow-300'
          onClick={() => scrollToSection('contato')}
        >
          Contato
        </button>
      </nav>
    </div>
  </header>
);

export default Header;
