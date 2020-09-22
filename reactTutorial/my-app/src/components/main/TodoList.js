import React from 'react'
import TodoItem from './TodoItem'
import '../../App.css'

let TodoList = () => {
    return (
        <ul className="todo_Container">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </ul>
    )
}

export default TodoList