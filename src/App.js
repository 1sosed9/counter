import React from 'react';
import './index.scss';

function App() {
  const [count, setCount] = React.useState(0);

  function onclickPlus() {
    setCount(count + 1);
  }

  function onclickMinus() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1 >{count}</h1>
        <button className="minus" onClick={onclickMinus}>- Минус</button>
        <button className="plus" onClick={onclickPlus}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
