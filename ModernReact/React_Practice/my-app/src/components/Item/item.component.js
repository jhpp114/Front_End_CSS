import React from 'react';

class Item extends React.Component {
    handleClick = (event) => {
        this.props.remove(this.props.item)
    }
    render() {
        return (
            <li>
                {this.props.item}
                <button onClick={this.handleClick}>Remove</button>
            </li>
        )
    }
}

export default Item;