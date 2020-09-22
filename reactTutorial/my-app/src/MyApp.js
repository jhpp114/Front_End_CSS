import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/TodoList'
import Footer from './components/footer/Footer'

const MyApp = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default MyApp