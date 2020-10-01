import React from 'react'
import './Die.css'
function Die(props) {
    // if (props.isRolling) {
    //     const divContainer = document.querySelectorAll('.die-container i');
    //     divContainer[0].classList.add('isRolling');
    //     divContainer[1].classList.add('isRolling');
    // }
    return (
        <div>
            <i className={`dieStyle ${props.dice1}`}></i>
            <i className={`dieStyle ${props.dice2}`}></i>
        </div>
    )
}
export default Die;