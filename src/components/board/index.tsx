function Board() {
  return (
    <div className="app__calculator--board">
      <div className="board__title--wrapper">
        <h2>VOCÊ RECEBERÁ:</h2>
      </div>
      <div className="board__list--wrapper">
        <ul>
          <li>
            Amanhã: <span>R$ 0,00</span>
          </li>
          <li>
            Em 15 dias: <span>R$ 0,00</span>
          </li>
          <li>
            Em 30 dias: <span>R$ 0,00</span>
          </li>
          <li>
            Em 90 dias: <span>R$ 0,00</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Board;
