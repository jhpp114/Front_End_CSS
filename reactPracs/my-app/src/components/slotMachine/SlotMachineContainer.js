import React from 'react'
import SlotMachine from './SlotMachine'

class SlotMachineContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <SlotMachine
                    slot1={"x"}
                    slot2={"x"}
                    slot3={"x"}
                />
                <SlotMachine
                    slot1={"x"}
                    slot2={"y"}
                    slot3={"x"}
                />
            </div>
        )
    }
}
export default SlotMachineContainer
