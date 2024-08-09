import React from 'react';

import LinkedInIcon from './LinkedInIcon';
import GithubIcon from './GithubIcon';

const Footer: React.FC = () => {
  return (
    <footer className='bg-neutral-100 text-center text-neutral-600 dark:bg-sky-600 dark:text-neutral-200 lg:text-left h-12 mt-auto'>
      <div className='flex justify-center'>
        <a
          href='https://www.linkedin.com/in/franco-baisch/'
          className='mr-6 text-neutral-600 dark:text-neutral-200 mt-10'
          aria-label='LinkedIn'
        >
          <LinkedInIcon />
        </a>
        <a
          href='https://github.com/Baizch'
          className='text-neutral-600 dark:text-neutral-200 mt-10'
          aria-label='Github'
        >
          <GithubIcon />
        </a>
      </div>
      <div className='bg-neutral-200 p-6 text-center dark:bg-sky-600 -mt-2'>
        <span>© 2024 Copyright:</span>
        <a className='font-semibold text-neutral-600 dark:text-neutral-100 ml-2'>
          Franco A Baisch
        </a>
      </div>
    </footer>
  );
};

export default Footer;
