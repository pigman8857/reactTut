import React from 'react';
import ContactCard from '../components/contactCard';
let contact1 = { imgurl: "http://placekitten.com/300/100", name: "Mr.Whiskan", phone: "(212) 555-1234", email: "mr.whiskan@catnip.meaw" };
let contact2 = { imgurl: "http://placekitten.com/300/200", name: "Mr.Furry", phone: "(212) 555-4321", email: "mr.furry@catnip.meaw" };
let contact3 = { imgurl: "http://placekitten.com/300/300", name: "Mr.Loki", phone: "(212) 567-1234", email: "mr.loki@catnip.meaw" };
let contact4 = { imgurl: "http://placekitten.com/300/300", name: "Mr.Sparta", phone: "(212) 980-1457", email: "mr.sparta@catnip.meaw" };
function App() {
    return (
        <div className="contacts">
            <ContactCard
                contact={contact1}
            />
            <ContactCard
                contact={contact2}
            />
            <ContactCard
                contact={contact3}
            />
            <ContactCard
                contact={contact4}
            />
        </div>
    )
}

export default App;




















/*
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function App() {
       const firstName = "Oh";
    const lastName = "Sva";
    const styleObj = { color: "white", border: "1px black solid", backgroundColor: "gray" };
    return (
        <div style={styleObj}>
            Hello {`${firstName} ${lastName}`}
        </div >
    )
}
*/