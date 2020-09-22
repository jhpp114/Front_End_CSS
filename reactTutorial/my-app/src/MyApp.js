import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/TodoList'
import Footer from './components/footer/Footer'
// some practices
import State from './components/class/State'
import StatePrac from './components/class/StatePrac'
import StateInOut from './components/class/StateInOut'
// import JokeContainer from './components/Joke/JokeContainer'
// import ProductContainer from './components/product/ProductContainer'
const MyApp = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
            {/* <JokeContainer/> */}
            {/* <ProductContainer/> */}
            {/* <State/>
            <StatePrac/>
            <StateInOut/> */}
        </div>
    )
}

export default MyApp