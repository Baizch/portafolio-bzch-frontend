import React from 'react';

interface SectionDividerProps {
  isDarkMode: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ isDarkMode }) => (
  <div
    className={`border-t-4 ${
      isDarkMode ? 'border-sky-900' : 'border-sky-200'
    } mb-8`}
  ></div>
);

export default SectionDivider;
