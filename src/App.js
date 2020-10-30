import logo from './logo.svg';
import './App.css';

import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor</h1>
      <div className="row">
        <Conversor moedaA="USD" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="USD"/>
      </div>
      <div className="row">
        <Conversor moedaA="CAD" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="CAD"/>
      </div>
      <div className="row">
        <Conversor moedaA="EUR" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="EUR"/>
      </div>
    </div>
  );
}

export default App;
