import React from 'react'
import './App.css'
// import PokeDex from './components/poket/Pokedex'
// import PokeGame from './components/poket/PokeGame'
// import SCContainer from './components/StateClicker/SCContainer'
// import RollDice from './components/DiceExercise/RollDice'
// import Lottery from './components/LotteryExercise/Lottery';
// import CoinFlipContainer from './components/CoinFlip/CoinFlipContainer'
// import ButtonList from './components/methodWithArg/ButtonList'
// import NumberBtn from './components/NumberBtn/NumberBtn';
// import FormPrac from './components/FormPrac/FormPrac';
// import Shopping from './components/FormPrac2/Shopping';
// import FormBoxList from './components/FormColorBox/FormBoxList';
// import Todo from './components/TodoApp/Todo';
// import ComponentDidMountPrac1 from './components/ComponentDidMount1/ComponentDidMountPrac1';
// import ReacAsync from './components/ReacAsync/ReacAsync';
// import CardDisplay from './components/CardDisplay/CardDeck'
import DadJoke1 from './components/DadJoke1/DadJoke'
const App = () => {
  return (
    <div className="App">
      {/* <PokeDex/> */}
      {/* <PokeGame/> */}
      {/* <SCContainer/> */}
      {/* <RollDice/> */}
      {/* <Lottery/>
      <Lottery title="hello world"/>
      <Lottery title="Lottery with 6 balls" ballNum={6}/> */}
      {/* <CoinFlipContainer/> */}
      {/* <ButtonList/> */}
      {/* <NumberBtn/> */}
      {/* <FormPrac/> */}
      {/* <Shopping/> */}
      {/* <FormBoxList/> */}
      {/* <Todo/> */}
      {/* <ComponentDidMountPrac1/> */}
      {/* <ReacAsync 
        username="jhpp114"
      /> */}
      {/* <CardDisplay/> */}
      <DadJoke1/>
    </div>
  )
}
// slot machine
// import SlotMachineContainer from './components/slotMachine/SlotMachineContainer.js'
// import Food from './components/Food/Food.js'
// import {Choice, Remove} from './components/Food/Helper.js'
// const App = () => {
//   console.log(typeof(Food));
//   let data = Choice(Food());
//   let returnData = Food();
//   return (
//     <div>
//       <p>I would like One {data} please</p>
//       <p>Here we go {data}</p>
//       <p>Delicious! May I have another one </p>
//       {returnData = Remove(returnData, data)}
//       <p>Sorry, we're all out. We have {returnData.length}</p>
//     </div>
//   )
// }

export default App;