function Form() {
  return (
    <div className="app__calculator--form">
      <h1>Simule sua Antecipação</h1>
      <div>
        <label htmlFor="amount">Informe o valor da venda *</label>
        <input type="text" id="amount" />
      </div>

      <div className="installments__wrapper">
        <label htmlFor="installments">Em quantas parcelas *</label>
        <input type="text" id="installments" />
      </div>

      <div>
        <label htmlFor="mdr">Informe o percentual de MDR *</label>
        <input type="text" id="mdr" />
      </div>
    </div>
  );
}

export default Form;
