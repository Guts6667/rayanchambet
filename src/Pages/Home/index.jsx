import React from "react";
import About from "../../Components/About";
import Contact from "../../Components/Contact";
import Portfolio from "../../Components/Portfolio";
import "./Home.scss"
const Home = () => {

    return(
        <div className="container">
            <section className= "container__home" id="home">
                <h2>
                    CREATING <strong className="strong-gradient">WEBSITES</strong> AND <strong className="strong-gradient">APPS</strong><br/>
                    FOR THOSE WHO SEEK <strong className="strong-gradient">CHALLENGES</strong> AND CREATE <strong className="strong-gradient">SOLUTIONS.</strong>
                </h2>
            <span className="container__home-divider"></span>
                <div className="container__home-subtitle">
                    <p>INSPIRED WEB DEVELOPER LEAN RESPONSIBLE CREATIONS WORK WITH HEART AND MIND <br/>PATHFINDER SOFTWARE ARCHITECT PROBLEM SOLVER</p>
                    
                </div>
            
            <button className="container__home-btn"><a href="#contact">Start a project</a></button>
        </section>
        <Portfolio />
        <About />
        <Contact />
        </div>
        
    )
}

export default Home;