import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  primary: true,
  label: 'Button',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: 'Button',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  size: 'large',
  label: 'Button',
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: 'small',
  label: 'Button',
};

export const LabellessButton = Template.bind({});
LabellessButton.args = {};

export const GreenBackgroundButton = Template.bind({});
GreenBackgroundButton.args = {
  primary: true,
  size: 'small',
  label: 'Custom background',
  backgroundColor: 'green',
};
