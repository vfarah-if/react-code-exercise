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
    const buttonElement = screen.getAllByRole('button')[1];
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Test');
  });

  test('should render an unhandled error component as example', () => {
    render(<App />);
    const errorHeaderElement = screen.getByText(
      'Oops, something unexpected happened.'
    );
    expect(errorHeaderElement).toBeInTheDocument();
  });

  test('should render an error message inside the unhandled error component', () => {
    render(<App />);
    const errorMessageElement = screen.getByText(
      'Example of how an unhandled error would look if it were to raise itself.'
    );
    expect(errorMessageElement).toBeInTheDocument();
  });
});
