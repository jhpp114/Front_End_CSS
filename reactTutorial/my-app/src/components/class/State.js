import React from 'react'

class State extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: "Yes"
        }
    }
    render() {
        return (
            <div>
                <p>Do you have any question? {this.state.answer}</p>
            </div>
        )
    }
}

export default State