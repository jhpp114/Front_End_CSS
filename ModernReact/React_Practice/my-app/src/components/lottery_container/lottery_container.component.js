import React, { Component } from 'react';
import Lottery from '../lottery/lottery.component';
import Ball from '../lottery_ball/ball.component';

const LotteryContainer = () => {
    return (
        <div>
            <Lottery/>
            {/* <Ball num={1}/> */}
        </div>
    )
}

export default LotteryContainer;
