import React from "react";
import "./Footer.scss";


/**
 * Footer
 * @returns {JSX} React Component
 */
const Footer = () => {

    return(
        <footer className="container">
            <span>chambet.dev@gmail.com</span>
            <div>
               <span>Find me on: </span>
                    <a href="https://github.com/Guts6667" target={"_blank"} rel="noopener noreferrer">
                    <img src="/assets/Github-icon.svg" alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/rayan-chambet-27aa941a8/" target={"_blank"} rel="noopener noreferrer">
                    <img src="/assets/Linkedin.svg" alt="Linkedin" />
                    </a>
                    <a href="http://www.blob-agency.com" target={"_blank"} rel="noopener noreferrer">
                    <img src="/assets/Blob.svg" alt="BLOB Agency" />
                    </a>
            </div>
        </footer>
    )
}

export default Footer;