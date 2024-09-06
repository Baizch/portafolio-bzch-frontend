import React from 'react';

import { DarkModeProps } from '../../common/interfaces';

import LinkedInIcon from './LinkedInIcon';
import GithubIcon from './GithubIcon';

const Footer = ({ isDarkMode }: DarkModeProps) => (
  <footer
    className={`bg-neutral-100 text-center text-neutral-600 ${
      isDarkMode ? 'bg-sky-950' : 'bg-sky-600'
    } lg:text-left h-12 mt-auto`}
  >
    <div className='flex justify-center'>
      <a
        href='https://www.linkedin.com/in/franco-baisch/'
        target='_blank'
        className='mr-6 text-neutral-600 dark:text-neutral-200 mt-10'
        aria-label='LinkedIn'
      >
        <LinkedInIcon />
      </a>
      <a
        href='https://github.com/Baizch'
        target='_blank'
        className='text-neutral-600 dark:text-neutral-200 mt-10'
        aria-label='Github'
      >
        <GithubIcon />
      </a>
    </div>
    <div
      className={`bg-neutral-200 p-6 text-center ${
        isDarkMode ? 'bg-sky-950' : 'bg-sky-600'
      } -mt-2`}
    >
      <span className='text-neutral-100'>© 2024 Copyright:</span>
      <a className='font-semibold text-neutral-600 dark:text-neutral-100 ml-2'>
        Franco A Baisch
      </a>
    </div>
  </footer>
);

export default Footer;
