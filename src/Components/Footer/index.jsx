import React from "react";
import "./Footer.scss";


const Footer = () => {

    return(
        <footer className="container">
            <span>chambet.dev@gmail.com</span>
            <div>
               <span>Find me on: </span>
                    <a href="https://github.com/Guts6667">
                    <img src="/assets/Github-icon.svg" alt="Github" target={"_blank"}/>
                    </a>
                    <a href="https://www.linkedin.com/in/rayan-chambet-27aa941a8/">
                    <img src="/assets/Linkedin.svg" alt="Linkedin" target={"_blank"}/>
                    </a>
                    <a href="#" target={"_blank"}>
                    <img src="/assets/Blob.svg" alt="BLOB Agency" />
                    </a>
            </div>
        </footer>
    )
}

export default Footer;