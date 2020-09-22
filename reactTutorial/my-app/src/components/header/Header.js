import React from 'react'
import '../../App.css'
const Header = () => {
    let greetingOptions = [
        'Good Morning'
    ,   'Good Afternoon'
    ,   'Good Evening'
    ];
    let greeting = '';
    let today = new Date();
    console.log(today.getHours());
    if (today.getHours < 12) {
        greeting = greetingOptions[0];
    } else if (today.getHours >= 12 && today.getHours <= 17) {
        greeting = greetingOptions[1];
    } else {
        greeting = greetingOptions[2];
    }
    return (
        <nav className="navbar">
            <h1>To Do List Phase3</h1>
            <ul className="menu_contents">
                <li>Nav Item1</li>
                <li>Nav Item2</li>
                <li>Nav Item3</li>
            </ul>
            <ul className="sign_contents">
                <li>{greeting}</li>
            </ul>
        </nav>
        
    )
}

export default Header