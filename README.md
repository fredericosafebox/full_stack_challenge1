# Getting Started with Create React App

Dev: Frederico Barros Costa

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

Esse projeto simula uma calculadora de antecipação de vendas realizadas no crédito. É possível realizar cálculos com ou sem especificação de dias, e o aplicativo conta com testes e2e para assegurar o padrão de qualidade dos resultados. O gerenciamento de estado foi feito com o Redux, e toda a base do projeto conta com ferramentas que visam qualidade de código, como ES lint e Prettier. A  aplicação foi componentizada, e toda a estrutura do projeto segue um padrão de fácil entendimento.

Para  instalar, execute o comando `yarn install`.

## Tecnologias

##### React Js

##### TypeScript

##### Redux Toolkit

##### Axios

##### Yup

##### React-Icons

##### SASS

##### Cypress

##### Prettier

##### ESlint

## Metodologias

#### GitFlow

#### BEM

## Scripts disponíveis

Nesse projeto é possível rodar os seguites scripts:

### `yarn start`

O comando irá lançar a aplicação no endereço ('https://localhost:3000').

### `yarn cypress:open`

O comando irá abrir o Cypress.io para que seja escolhida a forma de tese e2e.

### `yarn cypress:cli`

O comando irá rodar os testes e2e direto na CLI.

### `yarn cypress:firefox`

Caso possua o Firefox, o comando irá abrir o navegador com os preparos para testes e2e.

### `yarn lint`

O comando irá ativar e rodar as configurações do Eslint em todos os arquivos TS e TSX na pasta source já no modo quiet, o que evitará quebra do uso da aplicação por conta de warnings.

### `yarn format`

O comando irá formatar o código conforme as regras do prettier. A ação ocorrerá em todos os arquivos TS ou TSX na pasta source.

### `yarn build`

O comando irá buildar a aplicação para produção.

### `yarn eject`

Danger
