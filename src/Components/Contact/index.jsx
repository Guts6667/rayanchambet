import React from "react";
import FormContact from "../FormContact";
import "./Contact.scss"

const Contact = () => {


    return(

        <section className=" container__contact">
            
            <h2>CONTACT</h2>
            <div className="container__contact-form">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi adipisci tempora porro culpa, reiciendis quia sapiente possimus tenetur commodi delectus, ullam vitae ea provident earum illo excepturi obcaecati? Laboriosam.</p>
            <FormContact />
            </div>
            
        </section>
    )
}

export default Contact;