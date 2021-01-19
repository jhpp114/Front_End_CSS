import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dog from '../dog/dog.component';
import Dogs from '../dogs/dogs.component';

class Routes extends Component {
    render() {
        const getDog = (props) => {
            let name = props.match.params.name;
            let targetDog = this.props.dogs.find( eachDog => (
              eachDog.name.toLowerCase() === name.toLowerCase()
            ))
            if (typeof(targetDog) === 'undefined') {
                return <Redirect to='/dogs'/>
            }
            return <Dog {...props} targetDog={targetDog}/>
          };
        return (
            <Switch>
                <Route exact path='/dogs' render={()=> <Dogs allDogs={this.props.dogs}/>}/>
                <Route exact path='/dogs/:name' render={(routeParams) => getDog(routeParams)}/>
                <Redirect to='/dogs'/>
            </Switch>
        )
    }
}

export default Routes;
