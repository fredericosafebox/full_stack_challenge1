/* eslint-disable import/no-unresolved */
import './styles/reset.scss';
import './styles/global.scss';
import Calculadora from './components/calculadora';
/* import { useEffect } from 'react';
import { api } from './services/api'; */

function App() {
  /* useEffect(() => {
    const res = fetchData();
  }, []);

  const fetchData = async () => {
    const res = await api
      .post('/', {
        amount: 15000,
        installments: 2,
        mdr: 1,
        days: [1, 2, 3, 4, 5, 6, 7, 8],
      })
      .then((res) => res.data);
    console.log(res);
    return res;
  }; */

  return (
    <div className="App">
      <Calculadora />
    </div>
  );
}

export default App;
