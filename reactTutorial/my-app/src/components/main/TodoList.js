import React from 'react'

let TodoList = () => {
    return (
        <ul>
            <li>
                <input type="checkbox" name="todo1"></input>
                <span>Todo 1</span>
            </li>
            <li>
                <input type="checkbox" name="todo2"></input>
                <span>Todo 2</span>
            </li>
            <li>
                <input type="checkbox" name="todo3"></input>
                <span>Todo 3</span>
            </li>
        </ul>
    )
}

export default TodoList