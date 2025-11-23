describe('Teste de título do Google', () => {
  it('Deve acessar o Google e verificar o título', () => {
    // Acessa o site
    cy.visit('https://www.google.com');

    // Verifica se o título está correto
    cy.title().should('eq', 'Google');
  });
});
