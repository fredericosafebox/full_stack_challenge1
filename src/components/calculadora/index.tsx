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
import { toast } from 'react-toastify';

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
        const res = await api
          .post('/', data)
          .then((res) => res.data)
          .catch((err) => {
            switch (err.code) {
              case 'ECONNABORTED':
                toast.error('Sua conexão está lenta. Tente mais tarde.');
                break;
              case 'ERR_BAD_REQUEST':
                toast.error(
                  'Não foi possível obter resposta. Erro de Timeout.'
                );
                break;
              case 'ERR_BAD_RESPONSE':
                toast.error(
                  'Parece que temos um problema com o servidor. Por favor tente mais tarde.'
                );
                break;
              default:
                toast.error(err.message);
            }
          });
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
