import React from 'react';
import './App.css';

// import Food from './components/food/food';
import Number from './components/number/number.component';
import LotteryContainer from './components/lottery_container/lottery_container.component';

function App() {
  return (
    <div className="App">
      {/* <Food/> */}
      {/* <Number/> */}
      <LotteryContainer/>
    </div>
  );
}

export default App;
