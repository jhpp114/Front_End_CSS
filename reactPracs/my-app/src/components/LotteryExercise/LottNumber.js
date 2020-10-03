import React from 'react'
import './LottNumber.css'
function LottNumber(props) {
    return (
        <div className="eachLotNumber">
            {props.num}
        </div>
    )
}

export default LottNumber
