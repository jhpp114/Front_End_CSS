import React from 'react'

class StateInOut extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedin: true
        };
    }
    render() {
        console.log(this.state.isLoggedin);
        return (
            <div>
                <h1>You are currently {this.state.isLoggedin? 'in':'out'}</h1>
            </div>
        )
    }
} 
export default StateInOut