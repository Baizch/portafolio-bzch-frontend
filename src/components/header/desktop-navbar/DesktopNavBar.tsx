import React from 'react';
import type { NavBarProps } from 'src/types/types';

const DesktopNavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  return (
    <nav className='space-x-8 hidden md:flex'>
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
  );
};

export default DesktopNavBar;
