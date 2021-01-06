import React, { Component } from 'react';
import Lottery from '../lottery/lottery.component';
import Ball from '../lottery_ball/ball.component';

const LotteryContainer = () => {
    return (
        <div>
            <Lottery/>
            <Lottery title='mini Daily' maxBall={4} maxNum={40}/>
            {/* <Ball num={1}/> */}
        </div>
    )
}

export default LotteryContainer;
