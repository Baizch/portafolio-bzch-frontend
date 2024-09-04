import React from 'react';

interface TitleProps {
  title: string;
  isDarkMode: boolean;
}

const Title: React.FC<TitleProps> = ({ title, isDarkMode }) => (
  <h2
    className={`text-3xl font-bold ${
      isDarkMode ? 'text-white' : 'text-black'
    } mb-8 text-center`}
  >
    {title}
  </h2>
);

export default Title;
