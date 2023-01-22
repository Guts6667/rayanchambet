import React from "react";
import { useState } from "react";
import "./Header.scss"

/**
 * Header
 * @returns {JSX} React Component
 */
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleBtn() {
        let navIcon = document.querySelector('.nav-icon');
        navIcon.classList.toggle('open')
        if (navIcon.classList.contains('open')) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }
    return(
        <header className="container__header">
             <div className="container__header-burger" onClick={toggleBtn}>
                <div className="nav-icon" >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="container__header-title">
                <img src="" alt="" />
                <h1>Rayan Chambet</h1>
            </div>
            <nav className="container__header-navXl">
                <a href="#home" >Home</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                
            </nav>
            {isOpen && (
                <nav className="container__burgerNav">
            <a href="#home" onClick={toggleBtn}>Home</a>
            <a href="#portfolio" onClick={toggleBtn}>Portfolio</a>
            <a href="#about" onClick={toggleBtn}>About</a>
            <a href="#contact" onClick={toggleBtn}>Contact</a>
        </nav>
            )
                
            }
        </header>
    )
}

export default Header;