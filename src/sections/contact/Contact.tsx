import React from 'react';

import SectionDivider from '../../components/divider/Divider';
import Title from '../../components/title/Title';
import ContactForm from '../../components/form/Form';

const Contact = (React.FC = () => {
  return (
    <section id='contato' className='bg-white py-12'>
      <div className='max-w-5xl mx-auto px-4'>
        <SectionDivider />
        <Title title='Contato' />
        <ContactForm />
      </div>
    </section>
  );
});

export default Contact;
