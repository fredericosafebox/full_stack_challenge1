/* eslint-disable import/no-unresolved */
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  updateAmount,
  updateInstallments,
  updateMdr,
  updateResult,
} from '../../reducers/form/formSlice';
import schema from '../../schemas/requestSchema';
import { api } from '../../services/api';

function Form() {
  const dispatch = useAppDispatch();
  const { amount, installments, mdr } = useAppSelector((state) => state.form);

  const validateState = async () => {
    try {
      const data = schema.validateSync({
        amount,
        installments,
        mdr,
      });
      console.log(data);
      const res = await api.post('/', data).then((res) => res.data);
      dispatch(
        updateResult({
          tomorrow: res['1'],
          twoWeeks: res['15'],
          oneMonth: res['30'],
          threeMonths: res['90'],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleAmount = (n: ChangeEvent<HTMLInputElement>) => {
    const value = Number(n.currentTarget.value);
    if (!isNaN(value)) {
      dispatch(updateAmount(value));
    }
  };
  const handleInstallments = (n: ChangeEvent<HTMLInputElement>) => {
    const value = Number(n.currentTarget.value);
    if (!isNaN(value)) {
      dispatch(updateInstallments(value));
    }
  };
  const handleMdr = (n: ChangeEvent<HTMLInputElement>) => {
    const value = Number(n.currentTarget.value);
    if (!isNaN(value)) {
      dispatch(updateMdr(value));
    }
  };

  return (
    <div className="app__calculator--form">
      <h1>Simule sua Antecipação</h1>
      <div>
        <label htmlFor="amount">Informe o valor da venda *</label>
        <input
          type="text"
          id="amount"
          value={amount?.toString()}
          onChange={handleAmount}
          onBlur={validateState}
        />
      </div>

      <div className="installments__wrapper">
        <label htmlFor="installments">Em quantas parcelas *</label>
        <input
          type="text"
          id="installments"
          value={installments?.toString()}
          onBlur={validateState}
          onChange={handleInstallments}
        />
      </div>

      <div>
        <label htmlFor="mdr">Informe o percentual de MDR *</label>
        <input
          type="text"
          id="mdr"
          value={mdr?.toString()}
          onBlur={validateState}
          onChange={handleMdr}
        />
      </div>
    </div>
  );
}

export default Form;
