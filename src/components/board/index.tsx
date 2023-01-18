/* eslint-disable import/no-unresolved */
import { useAppSelector } from '../../app/hooks';

function Board() {
  const { tomorrow, twoWeeks, oneMonth, threeMonths } = useAppSelector(
    (state) => state.form
  );
  return (
    <div className="app__calculator--board">
      <div className="board__title--wrapper">
        <h2>VOCÊ RECEBERÁ:</h2>
      </div>
      <div className="board__list--wrapper">
        <ul>
          <li>
            Amanhã: <span>R$ {tomorrow}</span>
          </li>
          <li>
            Em 15 dias: <span>R$ {twoWeeks}</span>
          </li>
          <li>
            Em 30 dias: <span>R$ {oneMonth}</span>
          </li>
          <li>
            Em 90 dias: <span>R$ {threeMonths}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Board;
