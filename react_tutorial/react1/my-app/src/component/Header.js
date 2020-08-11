import React from "react";

function Header() {
    const date = new Date();
    const user_name = "Jun Hyung Park";
    console.log(date.getHours() % 12);
    let greeting = '';
    let hour = date.getHours();
    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    return (
        <div>
            <h3>{`${greeting} ${user_name}`}</h3>
            <h1>Here is Your Todo Lists</h1>
        </div>
    )
};

export default Header;
