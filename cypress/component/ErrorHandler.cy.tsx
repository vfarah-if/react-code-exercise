import React from 'react';
import { mount } from '@cypress/react';
import { ErrorBoundary } from 'react-error-boundary';
import UnhandledError from '../../src/components/UnhandledError';

const SpannerInTheWorks = () => {
  throw Error('Spanner in the works!');
};

const COMPONENT = () => (
  <ErrorBoundary FallbackComponent={UnhandledError}>
    <SpannerInTheWorks />
  </ErrorBoundary>
);

describe('ErrorFallback', () => {
  context('when an error occurs in production', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', () => {
        return false;
      });
    });

    it('should show a general error message', () => {
      mount(<COMPONENT />);

      cy.get('[data-test="error-message"] h2').should(
        'contain',
        'Oops, something unexpected happened.'
      );
      cy.get('[data-test="badge"]').should('contain', 'Spanner in the works!');
    });

    it('should show a retry button', () => {
      mount(<COMPONENT />);

      cy.get('[data-test="error-message"] button').should('contain', 'Retry');
    });
  });
});
