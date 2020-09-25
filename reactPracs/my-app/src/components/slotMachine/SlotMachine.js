import React from 'react'

function SlotMachine(props) {
    console.log(props);
    let result = ``;
    if (props.slot1 === props.slot2 && props.slot2 === props.slot3) {
        result = `You are Winner!`
    } else {
        result = `You Lose!`
    }
    return (
        <div>
            {props.slot1}
            {props.slot2}
            {props.slot3}
            <p>{result}</p>
        </div>
    )
}
export default SlotMachine