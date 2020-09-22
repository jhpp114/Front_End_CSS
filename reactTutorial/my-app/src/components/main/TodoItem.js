import React from 'react'
import '../../App.css'
const TodoItem = (props) => {
    console.log(props)
    
    return (
        <li className= {props.isComplete? 'isComplete' : 'isNotComplete'}>
            <input type="checkbox" checked={props.isComplete}/>
            <span>{props.content}</span>
        </li>
    )
}
export default TodoItem