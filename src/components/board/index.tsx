/* eslint-disable import/no-unresolved */
import { useAppSelector } from '../../app/hooks';

function Board() {
  const { tomorrow, twoWeeks, oneMonth, threeMonths, days } = useAppSelector(
    (state) => state.form
  );
  return (
    <div className="app__calculator--board">
      <div className="board__title--wrapper">
        <h2>VOCÊ RECEBERÁ:</h2>
      </div>
      <div className="board__list--wrapper">
        {days!.length === 0 && (
          <ul>
            <li>
              Amanhã: <span data-cy="tomorrow">R$ {tomorrow}</span>
            </li>
            <li>
              Em 15 dias: <span data-cy="twoWeeks">R$ {twoWeeks}</span>
            </li>
            <li>
              Em 30 dias: <span data-cy="oneMonth">R$ {oneMonth}</span>
            </li>
            <li>
              Em 90 dias: <span data-cy="threeMonths">R$ {threeMonths}</span>
            </li>
          </ul>
        )}
        {days!.length > 0 && (
          <ul>
            {Object.keys(days![0]).map((key: string, index) => {
              const value = days![0][key];
              return (
                <li key={index}>
                  Em {key} dias: <span>R$ {value},00</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Board;
