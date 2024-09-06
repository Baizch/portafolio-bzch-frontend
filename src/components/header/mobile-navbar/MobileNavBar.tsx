import React from 'react';
import type { NavBarProps } from 'src/common/interfaces';

const MobileNavBar = ({
  scrollToSection,
  isDarkMode,
  toggleMenu,
}: NavBarProps) => {
  return (
    <nav
      className={`md:hidden ${
        isDarkMode ? 'bg-sky-950' : 'bg-sky-600'
      } shadow-md xs:-mt-6`}
    >
      <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
        <button
          className='block text-gray-800 dark:text-gray-200 hover:text-yellow-300 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'
          onClick={() => {
            scrollToSection?.('sobre', 250);
            toggleMenu?.();
          }}
        >
          Sobre mim
        </button>
        <button
          className='block text-gray-800 dark:text-gray-200 hover:text-yellow-300 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'
          onClick={() => {
            scrollToSection?.('tecnologias', 250);
            toggleMenu?.();
          }}
        >
          Tecnologias
        </button>
        <button
          className='block text-gray-800 dark:text-gray-200 hover:text-yellow-300 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'
          onClick={() => {
            scrollToSection?.('projetos', 250);
            toggleMenu?.();
          }}
        >
          Projetos
        </button>
        <button
          className='block text-gray-800 dark:text-gray-200 hover:text-yellow-300 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'
          onClick={() => {
            scrollToSection?.('contato', 250);
            toggleMenu?.();
          }}
        >
          Contato
        </button>
      </div>
    </nav>
  );
};

export default MobileNavBar;
