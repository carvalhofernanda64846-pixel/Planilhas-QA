describe('Fluxo de pesquisa – DuckDuckGo', () => {
  it('Pesquisa por "Cypress" com sucesso', () => {
    cy.visit('https://duckduckgo.com/');

    cy.get('input[name="q"]').type('Cypress{enter}');

    cy.get('.results--main').should('exist');
    cy.contains('Cypress').should('exist');
  });
});
