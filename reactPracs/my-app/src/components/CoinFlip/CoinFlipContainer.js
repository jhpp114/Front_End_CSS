import React, {Component} from 'react'
import Coin from './Coin'
class CoinFlipContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headCount: 0
        ,   tailCount: 0
        ,   isHead: false
        ,   totalCount: 0
        }
        this.addCount = this.addCount.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    addCount() {
        this.setState( (curState) => {
            if (curState.isHead) {
                return {
                    totalCount: curState.totalCount + 1
                ,   headCount: curState.headCount + 1
                }
            } else {
                return {
                    totalCount: curState.totalCount + 1
                ,   tailCount: curState.tailCount + 1
                }
            }
        })
    }
    handleClick() {
        this.setState( (curState) => {
            return {
                isHead: !curState.isHead
            }
            
        });
        this.addCount() 
    }
    render() {
        console.log(this.state.isHead)
        return (
            <div>
                <Coin 
                isHead={this.state.isHead} 
                />
                <div>
                    <p>The Total Flip: {this.state.totalCount}&nbsp;&nbsp;
                        <span>The Head Count: {this.state.headCount}</span>&nbsp;&nbsp;
                        <span>The Tail Count: {this.state.tailCount}</span>&nbsp;
                    </p>
                </div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }

}

export default CoinFlipContainer;
