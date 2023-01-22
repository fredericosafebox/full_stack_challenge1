describe('Testes de funções básicas', () => {
  it('Verificando o estado inicial da aplicação', () => {
    cy.visit('localhost:3000');

    /**
     * @description Conjunto de testes para verificar os valores iniciais dos inputs
     */
    cy.get('[data-cy="amount"]')
      .should('exist')
      .then(($input) => {
        expect($input.val()).to.eq('1000');
      });
    cy.get('[data-cy="installments"]')
      .should('exist')
      .then(($input) => {
        expect($input.val()).to.eq('1');
      });
    cy.get('[data-cy="mdr"]')
      .should('exist')
      .then(($input) => {
        expect($input.val()).to.eq('0');
      });

    /**
     * @description Conjunto de testes para verificar o board de valores
     */
    cy.get('[data-cy="tomorrow"]')
      .should('exist')
      .then(($display) => {
        expect($display.text()).to.eq('R$ 0');
      });
    cy.get('[data-cy="twoWeeks"]')
      .should('exist')
      .then(($display) => {
        expect($display.text()).to.eq('R$ 0');
      });
    cy.get('[data-cy="oneMonth"]')
      .should('exist')
      .then(($display) => {
        expect($display.text()).to.eq('R$ 0');
      });
    cy.get('[data-cy="threeMonths"]')
      .should('exist')
      .then(($display) => {
        expect($display.text()).to.eq('R$ 0');
      });
    /**
     * @description Verificando os botões do formulario de antecipação
     */
    cy.get('[data-cy="modal"]').should('not.exist');
    cy.get('[data-cy="calcular"]')
      .should('exist')
      .then(($btn) => {
        expect($btn.text()).to.eq('Calcular');
      });
    cy.get('[data-cy="reset"]')
      .should('exist')
      .then(($btn) => {
        expect($btn.text()).to.eq('Reset');
      });
    /**
     * @description Verificando se o modal abre depois do click no calendario
     */
    cy.get('[data-cy="calendar"]')
      .click()
      .then(() => {
        cy.get('[data-cy="modal"]').should('exist');
      });
  });
});
