import React from 'react'

const ContactCard = (props) => {
    console.log(props);
    console.log(props.contact.name);
    return (
        <div className="card_item">
            <img src={props.contact.imgURL}/>
            <h1>{props.contact.name}</h1>
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div>
    )
}

export default ContactCard