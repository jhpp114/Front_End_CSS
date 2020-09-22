import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/TodoList'
import Footer from './components/footer/Footer'
// some practices
import ContactInfo from './components/Side/ContactInfo'
import JokeContainer from './components/Joke/JokeContainer'
const MyApp = () => {
    return (
        <div>
            {/* <Header/>
            <Main/>
            <Footer/> */}
            {/* <ContactInfo/> */}
            <JokeContainer/>
        </div>
    )
}

export default MyApp