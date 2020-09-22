import React from 'react'
import '../../App.css'
const TodoItem = (props) => {
    console.log(props)
    
    return (
        <li className= {props.isComplete? 'isComplete' : 'isNotComplete'}>
            <input type="checkbox" name="todo1"/>
            <span>{props.content}</span>
        </li>
    )
}
export default TodoItem