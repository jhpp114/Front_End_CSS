import React from 'react';
import './App.css';

// import Food from './components/food/food';
import Number from './components/number/number.component';
import LotteryContainer from './components/lottery_container/lottery_container.component';
import RandomButton from './components/randomButton/randomButton.component';
import RemoveItem from './components/removeItem/removeItem.component';

function App() {
  return (
    <div className="App">
      {/* <Food/> */}
      {/* <Number/> */}
      {/* <LotteryContainer/> */}
      {/* <RandomButton/> */}
      <RemoveItem/>
    </div>
  );
}

export default App;
