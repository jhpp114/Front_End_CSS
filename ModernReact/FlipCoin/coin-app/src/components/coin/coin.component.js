import React from 'react';
import './coin.style.css';

const Coin = (props) => {
    const HeadURL = 'https://labs.blogs.com/currency/coin10.png';
    const TailURL = `data:image/jpeg;base64,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`;
    return (
        <div>
            <img className='coin-img' src={props.isHead? HeadURL: TailURL}/>
        </div>
    )
}

export default Coin;
