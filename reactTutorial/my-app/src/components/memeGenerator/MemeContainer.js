import React from 'react'
import MemeHeader from './MemeHeader'
import MemeGenerator from './MemeGenerator'
class MemeContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <main>
                <MemeHeader/>
                <MemeGenerator/>
                
            </main>
        )
    }
}
export default MemeContainer