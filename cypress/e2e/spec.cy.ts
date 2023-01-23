describe('Testes de funções básicas', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('Verificando o comportamento do form de antecipação de valores', () => {
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
  });

  it('Verificando o comportamento do board de valores', () => {
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
  });

  it('Verificando o comportamento do modal', () => {
    /**
     * @description Verificando comportamento do modal
     */
    cy.get('[data-cy="calendar"]')
      .click()
      .then(($calendar) => {
        cy.get('[data-cy="modal"]').should('exist');
        cy.get('[data-cy="days"]').should('exist');
        cy.get('[data-cy="calcularDias"]').should('exist');
        cy.get('[data-cy="cancelar"]')
          .should('exist')
          .click()
          .then(() => {
            cy.get('[data-cy="modal"]').should('not.exist');
            cy.get($calendar)
              .click()
              .then(() => {
                cy.get('[data-cy="closeModal"]').should('exist').click();
                cy.get('[data-cy="modal"]').should('not.exist');
              });
          });
      });
  });

  it('Testando o cálculo de antecipação com valor inicial de 15.000, 10 parcelas e 5% de MDR.', () => {
    cy.get('[data-cy="amount"]').should('exist').clear().type('15000');
    cy.get('[data-cy="installments"]').should('exist').clear().type('10');
    cy.get('[data-cy="mdr"]').should('exist').clear().type('5');
    cy.get('[data-cy="calcular"]').should('exist').click();
    cy.get('[data-cy="tomorrow"]').should('have.text', 'R$ 10355');
    cy.get('[data-cy="twoWeeks"]').should('have.text', 'R$ 10687');
    cy.get('[data-cy="oneMonth"]').should('have.text', 'R$ 11043');
    cy.get('[data-cy="threeMonths"]').should('have.text', 'R$ 12255');
  });

  it('Testando o cálculo de antecipação com valor inicial de 17.000, 8 parcelas e 9% de MDR, e apenas os dias 1, 25 e 38.', () => {
    cy.get('[data-cy="amount"]').should('exist').clear().type('17000');
    cy.get('[data-cy="installments"]').should('exist').clear().type('8');
    cy.get('[data-cy="mdr"]').should('exist').clear().type('9');
    cy.get('[data-cy="calendar"]')
      .click()
      .then(() => {
        cy.get('[data-cy="days"]').should('exist').type('1,25,38');
        cy.get('[data-cy="calcularDias"]').should('exist').click();
      });
    cy.get('[data-cy="1"]').should('have.text', 'R$ 9252,00');
    cy.get('[data-cy="25"]').should('have.text', 'R$ 10366,00');
    cy.get('[data-cy="38"]').should('have.text', 'R$ 10923,00');
  });
});
