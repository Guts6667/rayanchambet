import React from "react";
import "./BurgerNav.scss"
const BurgerNav = () => {


    return(
        <nav className="container__burgerNav">
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#competences">Competences</a>
        </nav>
    )
 }

 export default BurgerNav;