import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/TodoList'
import Footer from './components/footer/Footer'
// some practices

import JokeContainer from './components/Joke/JokeContainer'
import ProductContainer from './components/product/ProductContainer'
const MyApp = () => {
    return (
        <div>
            {/* <Header/>
            <Main/>
            <Footer/> */}
            {/* <JokeContainer/> */}
            <ProductContainer/>
        </div>
    )
}

export default MyApp