import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should render a learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should render a test button', () => {
    render(<App />);
    const linkElement = screen.getByRole('button');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('Test');
  });
});
