import React, {Component} from 'react'
import ShoppingItem from './ShoppingItem'
class Shopping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {   name: "bread"
                ,   qty: 2
                }
            ,   {
                    name: "milk"
                ,   qty: 1
                }
            ]
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem(item) {
        this.setState(curState => ({
            items: [...curState.items, item]
        }))
    }

    render() {
        return(
            <div>
                <h1>Shopping Cart</h1>
                <p>Currently Stored</p>
                <ul>
                    {this.state.items.map( (shoppingItem,index) => (
                         <li key={index}>
                            {shoppingItem.name} x {shoppingItem.qty}
                        </li>
                    ))}
                </ul>
                <ShoppingItem
                     addItem = {this.addItem}
                />
            </div>
        )
    }
}
export default Shopping;