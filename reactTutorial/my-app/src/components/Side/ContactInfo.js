import React from 'react'
import ContactCard from './ContactCard'
const ContactInfo = () => {
     return (
         <div className="contacts">
             <ContactCard
                contact = {{
                    name: "Mr Cat1"
                ,   imgURL: "http://placekitten.com/300/200"
                ,   phone: "123-321-3211"
                ,   email: "abc@goo.com"
                }}
            />
            <ContactCard
                contact = {{
                    name: "Mr Cat2"
                ,   imgURL: "http://placekitten.com/400/300"
                ,   phone: "123-123-1234"
                ,   email: "abc@abc.com"
                }}
            />
            
         </div>
     )
 }

 export default ContactInfo;