import React from "react";
import FormContact from "../FormContact";
import "./Contact.scss"

/**
 * Contact Section
 * @returns {JSX} React Component
 */
const Contact = () => {

    return(

        <section className=" container__contact" id="contact">
            
            <h2>CONTACT</h2>
            <div className="container__contact-form">
            <p>Drop me a message to contact me, I'll get back to you as soon as possible!<br/> Whether you need to ask informations, discuss your project or talk about a job opportunity: <br/> I'll take the time to hear you! <br/>See you soon 👋</p>
            <FormContact />
            </div>
            
        </section>
    )
}

export default Contact;