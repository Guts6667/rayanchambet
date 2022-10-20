import React from "react";
import About from "../../Components/About";
import Contact from "../../Components/Contact";
import Portfolio from "../../Components/Portfolio";
import "./Home.scss"
const Home = () => {

    return(
        <div className="container">
            <section className= "container__home">
                <h2>
                    CREATING <strong className="strong-gradient">WEBSITES</strong> AND <strong className="strong-gradient">APPS</strong><br/>
                    FOR THOSE WHO SEEK <strong className="strong-gradient">CHALLENGES</strong> AND CREATE <strong className="strong-gradient">SOLUTIONS.</strong>
                </h2>
            <span className="container__home-divider"></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium illum facere voluptatem tempora ut incidunt quos a ad dolores doloribus harum vitae nesciunt possimus, dolorem minus consectetur eos fugit.</p>
            <button className="container__home-btn">Start a project</button>
        </section>
        <Portfolio />
        <About />
        <Contact />
        </div>
        
    )
}

export default Home;