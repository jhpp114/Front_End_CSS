import React, { Component } from 'react'
import Colors from './seedColors';
import Palette from './components/palette/palette.component';
import Palettes from './components/palettes/palettes.component';
import SingleColorPalette from './components/singleColorPalettes/singleColorPalette.component';
import {generatePalette} from './colorHelper';

import {Route, Switch} from 'react-router-dom';
//material-ui-colors
class App extends Component {
  findPalette(id) {
    const targetPalette = Colors.find( eachPalette => {
      return eachPalette.id === id;
    })
    return targetPalette;
  }
  render() {
    // console.log(generatePalette(Colors[1]));
    return (
      <Switch>
        <Route exact path='/' render={(routeParams)=> <Palettes palette={Colors} {...routeParams}/>}/>
        <Route exact path='/palette/:id' render={(routeParams)=> <Palette palette={generatePalette(this.findPalette(routeParams.match.params.id))}/>}/>
        <Route exact path='/palette/:id/:colorId' render={() => <SingleColorPalette/>}/>
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(Colors[1])}/>
      // </div>
    );
  }
}

export default App;
