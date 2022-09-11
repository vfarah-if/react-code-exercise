import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import UnhandledError, { UnhandledErrorProps } from './UnhandledError';

export default { title: 'Component/UnhandledError' } as Meta;

const Template: Story<UnhandledErrorProps> = args => (
  <UnhandledError
    {...args}
    resetErrorBoundary={action('resetErrorBoundry clicked ...')}
  />
);

export const DefaultUnhandledError = Template.bind({});
DefaultUnhandledError.args = {
  error: Error('This is what went bang in the night.'),
};

export const CustomUnhandledError = Template.bind({});
CustomUnhandledError.args = {
  error: Error('This is what went bang in the night.'),
  displayMessage: 'KABOOM!',
};
