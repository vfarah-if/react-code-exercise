import { React } from 'react';
import { mount } from 'cypress/react';

import Button from '../../src/components/Button/Button';

describe('Button', () => {
  context('When default props passed', () => {
    beforeEach(() => {
      mount(
        <>
          <Button primary={true} label='Button' />
        </>
      );
    });

    it('should create a primary button', () => {
      cy.get('button').should('exist');
    });
  });
});
