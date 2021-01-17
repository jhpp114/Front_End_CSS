import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

// import Food from './components/food/food';
import Number from './components/number/number.component';
import LotteryContainer from './components/lottery_container/lottery_container.component';
import RandomButton from './components/randomButton/randomButton.component';
import RemoveItem from './components/removeItem/removeItem.component';
import Loader from './components/componentDidMount/loader.component';
import GithubUserInfo from './components/asyncComponentDidMount/githubUserInfo.component';
import RouterDOM from './components/routerDom/routerDom.component';

import RouterPattern from './components/routerPattern/routerPattern.component';

function App() {
  return (
    <div className="App">
      {/* <Food/> */}
      {/* <Number/> */}
      {/* <LotteryContainer/> */}
      {/* <RandomButton/> */}
      {/* <RemoveItem/> */}
      {/* <Loader/> */}
      {/* <GithubUserInfo username="jhpp114"/>
      <GithubUserInfo username="facebook"/> */}
      {/* <RouterDOM/> */}
      <Route exact path='/food/:name' render={(routeParams) => <RouterPattern {...routeParams}/>}/>
    </div>
  );
}

export default App;
