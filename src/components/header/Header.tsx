import React, { useState } from 'react';
import { Switch } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

import { DarkModeProps } from '../../common/interfaces';

import { scrollToSection } from '../../utils/scrollToSection';

import DesktopNavBar from './desktop-navbar/DesktopNavBar';
import MobileNavBar from './mobile-navbar/MobileNavBar';
import MobileMenu from './mobile-menu/MobileMenu';

interface HeaderProps extends DarkModeProps {
  handleClick: () => void;
}

const Header = ({ isDarkMode, handleClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 ${
        isDarkMode ? 'bg-sky-950' : 'bg-sky-600'
      } shadow-md`}
    >
      <div className='relative w-full flex justify-center items-center py-4 xs:h-20'>
        <Switch
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
          onChange={handleClick}
          className='mr-4'
          value={isDarkMode}
        />
        <MobileMenu toggleMenu={toggleMenu} />
        <DesktopNavBar scrollToSection={scrollToSection} />
      </div>

      {isOpen && (
        <MobileNavBar
          scrollToSection={scrollToSection}
          isDarkMode={isDarkMode}
          toggleMenu={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
