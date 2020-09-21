import React from "react"

function NameCard(prop) {
    return (
        <div>
            <img src={prop.url_image} alt="travel images"></img>
            <h4>{prop.name}</h4>
            <p>{prop.phone}</p>
            <p>{prop.email}</p>
        </div>
    )
}

export default NameCard;
