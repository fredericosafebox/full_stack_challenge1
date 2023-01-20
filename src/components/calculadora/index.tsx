/* eslint-disable import/no-unresolved */
import Board from '../board';
import Form from '../form';
import Days from '../days';
import Modal from '../modal';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  resetErrors,
  updateResult,
  updateErrors,
  updateDays,
} from '../../reducers/form/formSlice';
import schema from '../../schemas/requestSchema';
import { api } from '../../services/api';
import { ValidationError } from 'yup';

function Calculadora() {
  const { isVisible } = useAppSelector((state) => state.modal);
  const { amount, installments, mdr, daysString } = useAppSelector(
    (state) => state.form
  );
  const dispatch = useAppDispatch();

  const validateState = async () => {
    try {
      dispatch(resetErrors());
      if (daysString === '') {
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
      } else {
        const dayArray = daysString!.split(',');
        const data = schema.validateSync({
          amount,
          installments,
          mdr,
          days: dayArray,
        });
        const res = await api.post('/', data).then((res) => res.data);
        dispatch(updateDays([res]));
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        dispatch(updateErrors(error.message));
      }
    }
  };

  return (
    <main className="app__calculator">
      {isVisible && (
        <Modal>
          <Days validateState={validateState} />
        </Modal>
      )}
      <Form validateState={validateState} />
      <Board />
    </main>
  );
}

export default Calculadora;
