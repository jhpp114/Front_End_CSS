import React from 'react'
import ReactDOM from 'react-dom'
import MyApp from './MyApp'

const root = document.querySelector('#root');
// ReactDOM.render(
//   <MyApp/>
// , root
// )
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Greeting/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    )
  }
}

class Greeting extends React.Component {
  returnDate() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "evening";
    }
    return timeOfDay;
  }
  render() {
    const currentDate = this.returnDate();
    return (
      <h1>Good {currentDate}</h1>
    )
  }
}

ReactDOM.render(
  <App/>
, root
)
