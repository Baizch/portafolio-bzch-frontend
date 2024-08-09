// src/components/Button.stories.tsx
import React from 'react';
import { Button } from '../components/Button';

// Configuração básica para Storybook
export default {
  title: 'Components/Button',
  component: Button,
};

// Estória para o botão primário
export const Primary = () => (
  <Button primary bg-slate-800>
    Primary Buttons
  </Button>
);

// Estória para o botão secundário
export const Secondary = () => <Button bg-red-500>Secondary Button</Button>;
