import React from 'react';
import type { NavBarProps } from 'src/types/types';

const DesktopNavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  return (
    <nav className='space-x-8 hidden md:flex'>
      <button
        className='text-gray-800 dark:text-gray-200 hover:text-yellow-300'
        onClick={() => scrollToSection('sobre', 80)}
      >
        Sobre mim
      </button>
      <button
        className='text-gray-800 dark:text-gray-200 hover:text-yellow-300'
        onClick={() => scrollToSection('tecnologias', 80)}
      >
        Tecnologias
      </button>
      <button
        className='text-gray-800 dark:text-gray-200 hover:text-yellow-300'
        onClick={() => scrollToSection('projetos', 80)}
      >
        Projetos
      </button>
      <button
        className='text-gray-800 dark:text-gray-200 hover:text-yellow-300'
        onClick={() => scrollToSection('contato', 80)}
      >
        Contato
      </button>
    </nav>
  );
};

export default DesktopNavBar;
