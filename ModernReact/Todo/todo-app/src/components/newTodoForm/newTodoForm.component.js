import React, { Component } from 'react';
import './newTodoForm.style.css';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewTodo(this.state);
        this.setState({
            todo: ''
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
