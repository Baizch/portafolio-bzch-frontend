import React from 'react';
import { Meta, Story } from '@storybook/react';
import SectionDivider from './Divider';

export default {
  title: 'Components/Divider',
  component: SectionDivider,
} as Meta;

const Template: Story = (args) => <SectionDivider {...args} />;

export const Default = Template.bind({});
Default.args = {};
