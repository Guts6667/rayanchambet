import React from "react";
import Portfolio from "../../Components/Portfolio";
import "./Home.scss"
const Home = () => {

    return(
        <div className="container">
            <section className= "container__home">
                <h2>
                    CREATING <strong>WEBSITES</strong> AND <strong>APPS</strong><br/>
                    FOR THOSE WHO SEEK <strong>CHALLENGES</strong> AND CREATE <strong>SOLUTIONS.</strong>
                </h2>
            <span className="container__home-divider"></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium illum facere voluptatem tempora ut incidunt quos a ad dolores doloribus harum vitae nesciunt possimus, dolorem minus consectetur eos fugit.</p>
            <button className="container__home-btn">Start a project</button>
        </section>
        <Portfolio />
        </div>
        
    )
}

export default Home;