import React from 'react'

const ProductItem = (props) => {
    console.log(props)
    return (
        <ul>
            <li>
                <h1>Product Name: {props.productName}</h1>
                <p>Description: {props.description}</p>
                <small>Price: {props.price.toFixed(2)}</small>
            </li>
        </ul>
    );
}

export default ProductItem