import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UnhandledError from './UnhandledError';

describe('UnhandledError', () => {
  test('should render a retry button for reseting the error boundry', () => {
    const mockCallBack = jest.fn();
    render(
      <UnhandledError resetErrorBoundary={mockCallBack} error={Error('Test')} />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  test('should render a custom display message', () => {
    render(
      <UnhandledError
        resetErrorBoundary={jest.fn()}
        error={Error('Error message')}
        displayMessage='Custom display message!'
      />
    );

    expect(screen.getByText('Custom display message!')).toBeInTheDocument();
  });

  test('should render an error message when configured', () => {
    render(
      <UnhandledError
        resetErrorBoundary={jest.fn()}
        error={Error('Error message')}
      />
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});
