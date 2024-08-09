//deletar

import React from 'react';

interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ primary, children }) => {
  const className = primary ? 'btn-primary' : 'btn-secondary';
  return <button className={className}>{children}</button>;
};
