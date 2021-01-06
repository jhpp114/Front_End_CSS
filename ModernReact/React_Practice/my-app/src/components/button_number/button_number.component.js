import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.clickHandler}>Click ME</button>
        </div>
    )
};

export default Button;