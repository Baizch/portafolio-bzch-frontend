import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

import { NavBarProps } from '../../../common/interfaces';

const MobileMenu = ({ toggleMenu }: NavBarProps) => {
  return (
    <div className='absolute left-4 md:hidden'>
      <button
        type='button'
        className='text-gray-800 dark:text-gray-200 hover:text-yellow-300 focus:outline-none'
        aria-label='Toggle menu'
        onClick={toggleMenu}
      >
        <MenuOutlined />
      </button>
    </div>
  );
};

export default MobileMenu;
