/* eslint-disable import/no-unresolved */
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  updateAmount,
  updateInstallments,
  updateMdr,
  updateResult,
  updateErrors,
  resetErrors,
} from '../../reducers/form/formSlice';
import schema from '../../schemas/requestSchema';
import { api } from '../../services/api';
import { ValidationError } from 'yup';

function Form() {
  const dispatch = useAppDispatch();
  const { amount, installments, mdr, errors } = useAppSelector(
    (state) => state.form
  );

  const validateState = async () => {
    try {
      dispatch(resetErrors());
      const data = schema.validateSync({
        amount,
        installments,
        mdr,
      });
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
      if (error instanceof ValidationError) {
        dispatch(updateErrors(error.message));
      }
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
      <div className="input__wrapper">
        <label htmlFor="amount">Informe o valor da venda *</label>
        <input
          type="text"
          id="amount"
          value={amount?.toString()}
          onChange={handleAmount}
          onBlur={validateState}
        />
        {errors?.amount.length != 0 && (
          <span className="error">{errors?.amount[0].msg}</span>
        )}
      </div>

      <div className="input__wrapper">
        <label htmlFor="installments">
          Em quantas parcelas * <span className="after">(max.: 12)</span>
        </label>
        <input
          type="text"
          id="installments"
          value={installments?.toString()}
          onBlur={validateState}
          onChange={handleInstallments}
        />
        {errors?.installments.length != 0 && (
          <span className="error">{errors?.installments[0].msg}</span>
        )}
      </div>

      <div className="input__wrapper">
        <label htmlFor="mdr">Informe o percentual de MDR *</label>
        <input
          type="text"
          id="mdr"
          value={mdr?.toString()}
          onBlur={validateState}
          onChange={handleMdr}
        />
        {errors?.mdr.length != 0 && (
          <span className="error">{errors?.mdr[0].msg}</span>
        )}
      </div>
    </div>
  );
}

export default Form;
