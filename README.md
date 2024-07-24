# Projeto de Automação de Testes com Cypress 

## Índice
- [Projeto de Automação de Testes com Cypress](#projeto-de-automação-de-testes-com-cypress)
  - [Índice](#índice)
  - [Introdução](#introdução)
  - [Pré-requisitos](#pré-requisitos)
  - [Configuração do Projeto](#configuração-do-projeto)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [cypress-automation/](#cypress-automation)
  - [Cenários de Teste Criados](#cenários-de-teste-criados)
  - [Principais Comandos do Cypress](#principais-comandos-do-cypress)
  - [Conclusão](#conclusão)

## Introdução
Este documento descreve o passo a passo para configurar um projeto de automação de testes utilizando Cypress, incluindo a estrutura do projeto e a explicação de alguns pontos importantes do código.

## Pré-requisitos
Antes de começar, certifique-se de ter os seguintes itens instalados:

- **Node.js**: O Node.js é uma plataforma que permite executar código JavaScript fora do navegador, tornando possível criar aplicações backend e executar ferramentas de desenvolvimento como o Cypress. [Download Node.js](https://nodejs.org/)

- **npm**: O npm é o gerenciador de pacotes do Node.js. Ele é necessário para instalar o Cypress e outras dependências do projeto.

- **Editor de Texto**: Você precisará de um editor de texto para escrever e gerenciar seu código. Recomendo o uso do Visual Studio Code (VS Code). [Download VS Code](https://code.visualstudio.com/)

## Configuração do Projeto

1. **Instalação do Node.js e npm**:
   - Faça o download e instale o Node.js a partir do [site oficial](https://nodejs.org/). O npm é instalado automaticamente junto com o Node.js.
   - Verifique a instalação abrindo um terminal e executando os seguintes comandos:
     ```bash
     node -v
     npm -v
     ```
     Você deverá ver as versões instaladas do Node.js e do npm, respectivamente.

2. **Criação do Repositório do Projeto**:
   - **Opção 1: Usando Interface Gráfica (sem prompt de comando)**:
     1. Abra o Visual Studio Code.
     2. Navegue até o menu de arquivos e selecione a opção para abrir uma nova pasta.
     3. Crie uma nova pasta no drive C chamada `cypress-automation`. Por exemplo, `C:\cypress-automation`.
     4. Com a pasta `cypress-automation` aberta no editor, abra um novo terminal integrado através do menu de terminal do editor.

   - **Opção 2: Usando Prompt de Comando**:
     1. Abra o Prompt de Comando (cmd) ou Terminal.
     2. Navegue até o drive C e crie uma nova pasta:
        ```bash
        cd C:\
        mkdir cypress-automation
        cd cypress-automation
        ```
     3. Com a pasta `cypress-automation` criada e aberta, você pode inicializar o projeto npm diretamente do Prompt de Comando.

3. **Inicialização do Projeto npm**:
   - No terminal integrado do editor ou no Prompt de Comando, execute o comando para inicializar um projeto npm:
     ```bash
     npm init -y
     ```
     Este comando cria um arquivo `package.json` com as configurações padrão.

4. **Instalação do Cypress**:
   - Instale o Cypress como uma dependência de desenvolvimento:
     ```bash
     npm install cypress --save-dev
     ```

5. **Abrindo o Cypress**:
   - Após a instalação, abra o Cypress pela primeira vez para criar a estrutura inicial:
     ```bash
     npx cypress open
     ```
   - Este comando cria a estrutura inicial do Cypress e abre a interface gráfica do Cypress.

## Estrutura do Projeto
A estrutura do projeto segue o padrão do Cypress com algumas adaptações para utilizar o padrão Page Objects. Abaixo está a estrutura do diretório:

## cypress-automation/
- ├── cypress/
- │ ├── e2e/
- │ │ └── pesquisa.cy.js
-  ├── pages/
- │ │ └── pesquisa_page.js
- │ └── support/
- │ └── commands.js
- ├── node_modules/
- ├── cypress.config.js
- ├── package-lock.json
- ├── package.json


- **`cypress/e2e/pesquisa.cy.js`**: Arquivo que contém os testes automatizados para a funcionalidade de pesquisa.
- **`cypress/pages/pesquisa_page.js`**: Arquivo que define os métodos para interagir com os elementos da página de pesquisa, seguindo o padrão Page Objects.
- **`cypress/support/commands.js`**: Arquivo onde comandos personalizados do Cypress podem ser definidos.
- **`node_modules/`**: Diretório onde as dependências do projeto são instaladas.
- **`cypress.config.js`**: Arquivo de configuração do Cypress.
- **`package.json`**: Arquivo que gerencia as dependências e scripts do projeto.

## Cenários de Teste Criados

1. **Deve realizar uma busca no Google ao pressionar Enter após digitar o termo**:
   - Este teste realiza uma busca no Google utilizando a tecla Enter. Um termo aleatório é gerado usando a biblioteca `faker` e digitado na barra de pesquisa, seguido da tecla Enter. O teste verifica se a URL resultante inclui o termo 'search'.

2. **Deve realizar uma busca no Google ao clicar no botão de pesquisa**:
   - Este teste realiza uma busca no Google clicando no botão de pesquisa. Um termo aleatório é gerado, digitado na barra de pesquisa e o botão de pesquisa é clicado. O teste verifica se a URL resultante inclui o termo 'search'.

3. **Deve voltar à página inicial do Google após realizar uma busca e clicar no logotipo**:
   - Após realizar uma busca utilizando o botão Enter, o teste volta à página inicial do Google clicando no logotipo do Google.

4. **Deve realizar uma nova busca com um termo diferente após apagar a pesquisa anterior**:
   - Após realizar uma busca utilizando o botão Enter, o teste apaga o termo pesquisado e realiza uma nova busca com um novo termo aleatório.


## Principais Comandos do Cypress

Aqui estão alguns dos principais comandos utilizados no Cypress para escrever e executar testes automatizados:

- **`cy.visit(url)`**: Navega até a URL especificada.
- **`cy.get(selector)`**: Seleciona um elemento da página com base no seletor fornecido.
- **`cy.click()`**: Clica no elemento selecionado.
- **`cy.type(text)`**: Digita o texto especificado em um campo de entrada.
- **`cy.contains(text)`**: Seleciona um elemento que contém o texto especificado.
- **`cy.url()`**: Retorna a URL atual da página.
- **`cy.should('include', text)`**: Faz uma asserção para verificar se o valor inclui o texto especificado.

## Conclusão

Este guia fornece um passo a passo detalhado para configurar um projeto de automação de testes com Cypress. Inclui instruções para a instalação, criação e configuração do projeto, além de uma explicação sobre a estrutura do projeto e os principais comandos utilizados no Cypress.

Utilizando o padrão Page Objects, o projeto é organizado de forma a melhorar a clareza e a manutenção dos testes. O padrão Page Objects permite encapsular a lógica de interação com a interface em classes dedicadas, o que facilita a reutilização do código e a gestão dos testes. Com isso, a manutenção do projeto torna-se mais eficiente e a estrutura dos testes mais robusta.
