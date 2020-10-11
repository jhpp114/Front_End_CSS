import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        ,   done: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const newTodo = {
            ...this.state, id:uuidv4()
        }
        this.props.addTodo(newTodo);
        this.setState({
            name: ""
        ,   done: false
        })
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Todo: </label>
                <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={this.props.name}
                    onChange={this.handleChange}/>
                <button type="submit">Add Todo</button>
            </form>
        )
    }
}

export default TodoAdd;
