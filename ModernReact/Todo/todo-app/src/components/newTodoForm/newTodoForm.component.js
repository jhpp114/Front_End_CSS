import React, { Component } from 'react';
import './newTodoForm.style.css';

import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const newTodo = {...this.state, id: uuidv4()}
        this.props.addNewTodo(newTodo);
        this.setState({
            todo: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='todo'>Todo: </label>
                    <input
                        type='text'
                        id='todo'
                        name='todo'
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </div>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;
