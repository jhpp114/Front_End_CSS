import React from 'react'

class StatePrac extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Park Jun Hyung"
        ,   age: 27
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.age} years old</p>
            </div>
        )
    }
}
export default StatePrac