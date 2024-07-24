import pesquisa from "../pages/pesquisa_page";

describe("Testes de Pesquisa no Google", () => {
  beforeEach(() => {
    pesquisa.acessarPaginaInicial();
  });

  it('Deve realizar uma busca no Google ao pressionar Enter após digitar o termo', () => {
    pesquisa.realizarBuscaComEnter();
  });

  it('Deve realizar uma busca no Google ao clicar no botão de pesquisa', () => {
    pesquisa.realizarBuscaComBotao();
  });

  it('Deve voltar à página inicial do Google após realizar uma busca e clicar no logotipo', () => {
    pesquisa.realizarBuscaComEnter();
    pesquisa.voltarParaPaginaInicial();
  });

  it('Deve realizar uma nova busca com um termo diferente após apagar a pesquisa anterior', () => {
    pesquisa.realizarBuscaComEnter();
    pesquisa.apagarTermoDeBusca();
    pesquisa.realizarNovaBusca();
  });
    
    // Não faz parte dos cenários.
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que erros não capturados falhem o teste
    return false;
  });
});






