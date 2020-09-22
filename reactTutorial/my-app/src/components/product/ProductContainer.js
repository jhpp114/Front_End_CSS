import React from 'react'
import productData from './productData'
import ProductItem from './ProductItem'

const ProductContainer = () => {
    const productArray = productData.map( (products) => {
        return (
            <div>
                <ProductItem
                    key = {products.id}
                    productName = {products.product_name}
                    description = {products.product_description}
                    price = {products.product_price}
                />
                <hr/>
                <br/>
            </div>
            
        )
    });
    return (
        <div>
            {productArray} 
        </div>
    )
}
export default ProductContainer
