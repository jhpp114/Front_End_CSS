import React from 'react'
// import PokeDex from './components/poket/Pokedex'
// import PokeGame from './components/poket/PokeGame'
// import SCContainer from './components/StateClicker/SCContainer'
import RollDice from './components/DiceExercise/RollDice'
const App = () => {
  return (
    <div>
      {/* <PokeDex/> */}
      {/* <PokeGame/> */}
      {/* <SCContainer/> */}
      <RollDice/>
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