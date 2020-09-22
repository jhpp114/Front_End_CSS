import React from 'react'

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counts: 0
        }
        this.addCount = this.addCount.bind(this);
    }
    addCount() {
        this.setState( (prevState) => {
            return {
                counts: prevState.counts + 1
            }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.counts}</h1>
                <br/>
                <button onClick={this.addCount}>Add Count</button>
            </div>
        )
    }
}
export default Counter;
