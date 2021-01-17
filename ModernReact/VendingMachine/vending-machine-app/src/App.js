import logo from './logo.svg';
import './App.css';
import {Switch, Route } from 'react-router-dom'; 
import VendingMachine from './components/vendingmachine/vendingmachine.component';
import Drink from './components/drinks/drink.component';
import Snacks from './components/snacks/snacks.component';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' render={()=> <VendingMachine/>}/>
        <Route exact path='/snacks' component={Snacks}/>
        <Route exact path='/drink' component={Drink}/>
      </Switch>
    </div>
  );
}

export default App;
