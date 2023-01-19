/* eslint-disable import/no-unresolved */
import './styles/reset.scss';
import './styles/global.scss';
import Calculadora from './components/calculadora';
//import { useEffect } from 'react';
//import { api } from './services/api';

function App() {
  /* useEffect(() => {
    const res = fetchData();
  }, []);

  const fetchData = async () => {
    const res = await api
      .post('/', {
        amount: 15000,
        installments: 1,
        mdr: 1,
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
