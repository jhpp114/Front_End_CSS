import React from 'react';
import './ball.style.css';

const Ball = (props) => {
    console.log(props);
    return (
        <div className='ball'>
            {props.num}
        </div>
    )
} 

export default Ball;
