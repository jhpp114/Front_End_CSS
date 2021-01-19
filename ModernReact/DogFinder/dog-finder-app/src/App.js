import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.component';
import Routes from './components/routes/route.component';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name:"Whiskey",
        age: 5,
        src:'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
        facts:[
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name:"Hazel",
        age: 3,
        src:'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        facts:[
          "Hazel loves eating popcorn.",
          "Hazel is a terrible guard dog.",
          "Hazel wants to cuddle with you!"
        ]
      },
      {
        name:"Tubby",
        age: 4,
        src:'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        facts:[
          "Tubby loves eating popcorn.",
          "Tubby is a terrible guard dog.",
          "Tubby wants to cuddle with you!"
        ]
      }
    ]
  }
  render() {
    
    return (

        <div className="App">
          <Navbar dogs={this.props.dogs}/>
          <Routes dogs={this.props.dogs}/>
        </div>
     
    )
  }
}

export default App;
