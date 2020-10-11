import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [
                {
                    name: "todo1"
                ,   done: false
                }
            ]
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(newTodo) {
        this.setState(curState => ({
            todoItems: [...curState.todoItems, newTodo]
        }));
    }

    render() {
        const todoItems = this.state.todoItems.map((todo) => (
            <TodoItem 
                name={todo.name}
                done={todo.done}
            />
        ))
        
        return (
            <div>
                <ul>
                    {todoItems}
                </ul>    
                <br/>
                <TodoAdd
                    addTodo={this.addTodo}
                />
            </div>
            
        );
    }
}

export default Todo;
