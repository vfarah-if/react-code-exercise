import React from 'react';
import { mount } from 'cypress/react';

import {
  PrimaryButton,
  GreenBackgroundButton,
} from '../../src/components/Button/Button.stories';

describe('Button', () => {
  context('When configured as a primary button', () => {
    beforeEach(() => {
      mount(
        <>
          <PrimaryButton {...PrimaryButton.args} />
        </>
      );
    });

    it('should create a primary button', () => {
      cy.get('button')
        .should('exist')
        .should('have.attr', 'label', 'Button')
        .contains('Button');
    });
  });
  context('When configured as a green button', () => {
    beforeEach(() => {
      mount(
        <>
          <GreenBackgroundButton {...GreenBackgroundButton.args} />
        </>
      );
    });

    it('should create a green custom background button', () => {
      cy.get('button')
        .should('exist')
        .should('have.attr', 'label', 'Custom background')
        .contains('Custom background');
    });
  });
});
