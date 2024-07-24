import faker from 'faker';

export default {

  acessarPaginaInicial() {
    cy.visit('/');
  },
  
  realizarBuscaComEnter() {
    const termoAleatorio = faker.random.word();
    cy.get('#APjFqb')
      .click()
      .type(`${termoAleatorio}{enter}`);
    cy.url()
      .should('include', 'search');
  },
  
  realizarBuscaComBotao() {
    const termoAleatorio = faker.random.word();
    cy.get('#APjFqb')
      .click()
      .type(termoAleatorio);
    cy.get('body')
      .click('topLeft');
    cy.contains("Pesquisa Google").click({ force: true });
    cy.url()
      .should('include', 'search');
  },
  
  realizarNovaBusca() {
    const termoAleatorio = faker.random.word();
    cy.get('#APjFqb')
      .click()
      .type(`${termoAleatorio}{enter}`);
  },
  
  voltarParaPaginaInicial() {
    cy.get('a > img').click();
  },
  
  apagarTermoDeBusca() {
    cy.get('#APjFqb').clear();
  }
};


















