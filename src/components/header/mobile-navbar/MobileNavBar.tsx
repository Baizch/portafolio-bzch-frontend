import React from 'react';
import type { NavBarProps } from 'src/types/types';

const MobileNavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  return (
    <nav className='md:hidden bg-white dark:bg-sky-600 shadow-md xs:-mt-6'>
      <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
        <button
          className='block text-gray-800 dark:text-gray-200 hover:text-yellow-300 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'
          onClick={() => {
            scrollToSection('sobre');
            toggleMenu();
          }}
        >
          Sobre mim
        </button>
        <button
          className='block text-gray-800 dark:text-gray-200 hover:text-yellow-300 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'
          onClick={() => {
            scrollToSection('tecnologias');
            toggleMenu();
          }}
        >
          Tecnologias
        </button>
        <button
          className='block text-gray-800 dark:text-gray-200 hover:text-yellow-300 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'
          onClick={() => {
            scrollToSection('projetos');
            toggleMenu();
          }}
        >
          Projetos
        </button>
        <button
          className='block text-gray-800 dark:text-gray-200 hover:text-yellow-300 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'
          onClick={() => {
            scrollToSection('contato');
            toggleMenu();
          }}
        >
          Contato
        </button>
      </div>
    </nav>
  );
};

export default MobileNavBar;
