/* eslint-disable import/no-unresolved */
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { closeModal } from '../../reducers/modal/modalSlice';
import { GrClose } from 'react-icons/gr';
import { IPropsForm } from '../form';
import { setDayString } from '../../reducers/form/formSlice';

function Days({ validateState }: IPropsForm) {
  const dispatch = useAppDispatch();
  const { daysString } = useAppSelector((state) => state.form);

  const verifyInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const dayStr = e.currentTarget.value;
    if (dayStr === '') {
      return dispatch(setDayString(dayStr));
    }
    if (
      !isNaN(Number(dayStr[dayStr.length - 1])) ||
      dayStr[dayStr.length - 1] === ','
    ) {
      return dispatch(setDayString(dayStr));
    }
  };

  const submitAndClose = () => {
    validateState();
    dispatch(closeModal());
  };
  return (
    <div className="modal__calendar">
      <div className="modal__calendar--header">
        <h3>Calendar</h3>
        <button onClick={() => dispatch(closeModal())} data-cy="closeModal">
          <GrClose size={16} />
        </button>
      </div>

      <div className="modal__calendar--body">
        <label htmlFor="days">Simular dias específicos</label>
        <textarea
          id="days"
          data-cy="days"
          onChange={verifyInput}
          value={daysString}
        />
        <span className="after">
          Separe cada um com vírgulas &quot;,&ldquo; (Ex.: 1,13,62)
        </span>
        <div className="button__wrapper">
          <button
            className="button__reset"
            onClick={() => dispatch(closeModal())}
            data-cy="cancelar"
          >
            Cancelar
          </button>
          <button
            className="button__calculate"
            data-cy="calcularDias"
            onClick={submitAndClose}
          >
            Simular
          </button>
        </div>
      </div>
    </div>
  );
}

export default Days;
