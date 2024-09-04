import React from 'react';

import { DarkModeProps } from '../../common/interfaces';

import SectionDivider from '../../components/divider/Divider';
import Title from '../../components/title/Title';
import ContactForm from '../../components/form/contact-form/Form';

const Contact = ({ isDarkMode }: DarkModeProps) => {
  return (
    <section
      id='contato'
      className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-12`}
    >
      <div className='max-w-5xl mx-auto px-4'>
        <SectionDivider isDarkMode={isDarkMode} />
        <Title title='Contato' isDarkMode={isDarkMode} />
        <ContactForm isDarkMode={isDarkMode} />
      </div>
    </section>
  );
};

export default Contact;
