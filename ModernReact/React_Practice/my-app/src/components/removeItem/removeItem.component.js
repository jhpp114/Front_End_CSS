import React, { Component } from 'react';
import Item from '../Item/item.component';

class RemoveItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                '1','2','3','4','5'
            ]
        }
    } 
    remove = (item) => {
        this.setState( (prevState) => ({
            items: prevState.items.filter(eachItem => eachItem !== item)
        }));
    }
    render() {
        return (
            <div>
                {
                    this.state.items.map( eachItem => (<Item item={eachItem} remove={this.remove}/>))
                }
            </div>
        )
    }
}

export default RemoveItem;
