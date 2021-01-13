import React, { Component } from 'react';
import './todolist.style.css';

import TodoItem from '../todoItem/todoItem.component';

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
            </div>
        )
    }
}

export default TodoList;
