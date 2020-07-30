import React from 'react';

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img alt="" src={props.contact.imgurl} />
            <h3>name : {props.contact.name}</h3>
            <p>phone : {props.contact.phone}</p>
            <p>Email : {props.contact.email}</p>
        </div>
    )
}

export default ContactCard;