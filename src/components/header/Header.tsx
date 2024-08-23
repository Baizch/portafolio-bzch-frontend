import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const scrollDuration = 1000;
      const headerOffset = 80;
      const targetPosition = targetSection.offsetTop - headerOffset;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, scrollDuration);
        window.scrollTo(0, run);
        if (timeElapsed < scrollDuration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  return (
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
};

export default Header;
