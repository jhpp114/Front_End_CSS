import React, {Component} from 'react'

class ShoppingItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        ,   qty: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addItem(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add item to shopping cart</h2>
                <label htmlFor="name">Name </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange}/>

                <label htmlFor="qty">Qty </label>
                <input 
                    type="text" 
                    id="qty" 
                    name="qty" 
                    value={this.state.qty} 
                    onChange={this.handleChange}/>
                <button>Add to Cart</button>
            </form>
        )
    }
}

export default ShoppingItem;
