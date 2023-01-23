/* eslint-disable import/no-unresolved */
import './styles/reset.scss';
import './styles/global.scss';
import Calculadora from './components/calculadora';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Calculadora />
      <ToastContainer />
    </div>
  );
}

export default App;
