import React from 'react';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <h2 className='text-3xl font-bold text-black mb-8 text-center'>{title}</h2>
);

export default Title;
