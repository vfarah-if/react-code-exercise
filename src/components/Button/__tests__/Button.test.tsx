import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {
  PrimaryButton,
  SecondaryButton,
  LargeButton,
  SmallButton,
  LabellessButton,
  GreenBackgroundButton,
} from '../Button.stories';

import Button from '../Button';

describe('Button', () => {
  test('should fire a button click event', () => {
    const mockCallBack = jest.fn();
    render(<Button label='Test Click' onClick={mockCallBack} />);

    fireEvent.click(getButtonElement());

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  /* NOTE: These tests could be seen as bad practises because they are not testing behaviour and they
   **      are also using snapshots, which many find to be a bad practise. I like this snapshot and
   **      testing component because it helps to protect the storybook component, story book test drive
   **      the scenarios I created and so is an extension of visual testing as well as unit testing
   */

  test('should create a primary button', () => {
    render(
      <PrimaryButton
        primary={PrimaryButton.args?.primary}
        label={PrimaryButton.args?.label || ''}
      />
    );

    expect(getButtonElement()).toHaveTextContent('Button');
    expect(getButtonElement()).toMatchSnapshot('primary button');
  });

  test('should create a small secondry button', () => {
    render(
      <SmallButton
        size={SmallButton.args?.size}
        label={SmallButton.args?.label || ''}
      />
    );

    expect(getButtonElement()).toMatchSnapshot('small button');
  });

  test('should create a secondry button', () => {
    render(<SecondaryButton label={SmallButton.args?.label || ''} />);

    expect(getButtonElement()).toMatchSnapshot('secondry button');
  });

  test('should create a large button', () => {
    render(
      <LargeButton
        size={LargeButton.args?.size}
        label={LargeButton.args?.label || ''}
      />
    );

    expect(getButtonElement()).toMatchSnapshot('large button');
  });

  test('should create a geen background button', () => {
    render(
      <GreenBackgroundButton
        primary={GreenBackgroundButton.args?.primary || true}
        size={GreenBackgroundButton.args?.size}
        label={GreenBackgroundButton.args?.label || ''}
        backgroundColor={GreenBackgroundButton.args?.backgroundColor}
      />
    );

    expect(getButtonElement()).toMatchSnapshot('green background button');
  });

  test('should create a yellow labeless button as alternative test if devaiting from convenrional tests', () => {
    render(
      <LabellessButton
        label={LabellessButton.args?.label || ''}
        style={{ backgroundColor: 'yellow' }}
      />
    );

    expect(getButtonElement()).toMatchSnapshot('labelless yellow button');
  });
});

function getButtonElement(): Element | Node | Document | Window {
  return screen.getByRole('button');
}
