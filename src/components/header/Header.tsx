import React, { useState } from 'react';

import { scrollToSection } from '../../utils/scrollToSection';

import DesktopNavBar from './desktop-navbar/DesktopNavBar';
import MobileNavBar from './mobile-navbar/MobileNavBar';
import MobileMenu from './mobile-menu/MobileMenu';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-sky-600 shadow-md'>
      <div className='relative w-full flex justify-center items-center py-4 xs:h-20'>
        <MobileMenu toggleMenu={toggleMenu} />
        <DesktopNavBar scrollToSection={scrollToSection} />
      </div>

      {isOpen && <MobileNavBar scrollToSection={scrollToSection} />}
    </header>
  );
};

export default Header;
