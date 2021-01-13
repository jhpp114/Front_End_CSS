import React, { Component } from 'react';
import './todolist.style.css';

import TodoItem from '../todoItem/todoItem.component';
import NewTodoForm from '../newTodoForm/newTodoForm.component';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoLists: [
                {
                    todo:'study react'
                },
                {
                    todo:'starcraft'
                }
            ]
        };
        this.addNewTodo = this.addNewTodo.bind(this);
    }

    addNewTodo(todoItem) {
        this.setState({
            todoLists: [...this.state.todoLists, todoItem]
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.todoLists.map( eachTodo => (
                            <TodoItem todoData={eachTodo.todo}/>
                        ))
                    }
                </ul>
                <div>
                    <h3>Add Todo Lists</h3>
                    <NewTodoForm
                        addNewTodo={this.addNewTodo}
                    />
                </div>
            </div>
        )
    }
}

export default TodoList;
