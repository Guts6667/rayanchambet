import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./FormContact.scss"
const FormContact = () => {
    const form = useRef();
    const [displayForm, setDisplayForm] = useState(true);
    const [emailSent, setEmailSent] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_27deppr', 'template_ljc7pr3', form.current, 'NFUP3YK2Bta1k2GWK')
        .then((result) => {
            console.log(result.text);
            setDisplayForm(false);
            setEmailSent(true)
        }, (error) => {
            console.log(error.text);
            setEmailSent(false);
            displayForm(true)
        });
    };
    return(
        
        (displayForm && emailSent === false) ?(
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <input type="text" name="user_name"  defaultValue={'Name'}  placeholder={'John Doe'}/>
                    </div>
                     <div>
                        <input type="email" name="user_email" defaultValue={'Email'} placeholder={'johndoe@gmail.com'} />
                    </div>
                    <div>
                        <input type="text" name="user_subject" defaultValue={'Subject'} placeholder={"Let's have a meeting"}/>
                    </div>
                    <div>
                        <textarea name="message"  defaultValue={'Type your message...'} placeholder={'Hello! Is it possible to schedule a meeting on Thursday?'} />
                    </div>
            <input type="submit" value="Send your message" className="submit-btn" />
        </form>
            
    ) : (
            <div className="form-thanks">
                <span>Your emails has been sent! <br/>Thanks for reaching out! 👋</span>
            </div>
    )
    )
}

export default FormContact;