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
            <div className="container-animation">
            <div className="box-animation text-loop">
            <p>INSPIRED WEB DEVELOPER </p>
            <p>LEAN RESPONSIBLE CREATIONS</p>
            <p>WORK WITH HEART AND MIND</p>
            <p>PATHFINDER</p>
            <p>SOFTWARE ARCHITECT</p>
            <p>PROBLEM SOLVER</p>
            </div>
            <div className="box-animation2 text-loop2">
            <p >INSPIRED WEB DEVELOPER </p>
            <p>LEAN RESPONSIBLE CREATIONS</p>
            <p>WORK WITH HEART AND MIND</p>
            <p>PATHFINDER</p>
            <p>SOFTWARE ARCHITECT</p>
            <p>PROBLEM SOLVER</p>
            </div>
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