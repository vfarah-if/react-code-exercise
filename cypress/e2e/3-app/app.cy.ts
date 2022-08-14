describe('app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should present an anchor to learn react', () => {
    cy.get('a[class="App-link"]')
      .should('exist')
      .contains('Learn React')
      .invoke('attr', 'href')
      .should('eq', 'https://reactjs.org');
  });

  it('should present an image', () => {
    cy.get('header[class="App-header"] > img[class="App-logo"]')
      .should('exist')
      .invoke('attr', 'src')
      .should('eq', '/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg');
  });

  it('should present content about this project', () => {
    cy.get('header[class="App-header"] > p')
      .should('exist')
      .contains('Edit src/App.tsx and save to reload');
    cy.get('header[class="App-header"] > p > code').should('exist');
  });

  it('should present a test button', () => {
    cy.get('header[class="App-header"] > button')
      .should('exist')
      .contains('Test');
  });
});
