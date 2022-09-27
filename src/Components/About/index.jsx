import React from "react";

const About = () => {

    return(
        <section className="container__about">
            <h2>About</h2>
            <div className="container__about-top">
                <div className="container__about-card">
                    <img src="/assets/Rayan_Crimages.jpg" alt="Rayan Chambet" />
                    <h3>Hi, I'm Rayan. 👋</h3>
                    <p>I'm a 25 years old French dude. <br/>
                        I’m observant and curious, with a strong sense of competitivity and <strong>loyalty.</strong><br/>
                        <strong>People</strong> and <strong>environment</strong> are at the heart of my concerns, therefore building <strong>responsible web solutions</strong> is a key value in my work.
                        </p>
                </div>
                <div className="container__about-bottom">
                    <div className="container__about-textLeft">
                        <p>
                            After a first a degree of Web Developement, I obtained a Bachelor Degree to be a <strong>Software Developer</strong> specialized in <strong>Frontend</strong>.
                        </p>
                    </div>
                    <div className="container__about-textRight">
                        <p>
                            Today, I run <strong>BLOB Agency</strong>, a <strong>Webdesign</strong> company with incredible talents such as <a href="https://www.linkedin.com/in/alexiane-grieu-864084152/"><em>Alexiane Grieu</em></a>, UI/UX Designer.
                        </p>
                    </div>
                    <div className="container__about-textLeft">
                        <p>
                            Wether you want to bring build your <strong>project,</strong>start a <strong>business</strong> or talk about a <strong>job opportunity</strong>, feel free to reach out!
                        </p>
                    </div>
                </div>
            </div>
           
            {/* <div className="container__about-textLeft">
                <p>
                    After a first a degree of Web Developement, I obtained a Bachelor Degree to be a <strong>Software Developer</strong> specialized in <strong>Frontend</strong>.
                </p>
            </div> */}
            {/* <div className="container__about-textRight">
            <p>I'm a 25 years old French dude. <br/>
                I’m observant and curious, with a strong sense of competitivity and <strong>loyalty.</strong><br/>
                <strong>People</strong> and <strong>environment</strong> are at the heart of my concerns, therefore building <strong>responsible web solutions</strong> is a key value in my work.
                </p>
            </div> */}
            {/* <div className="container__about-textLeft">
                <p>
                    Wether you want to bring build your <strong>project,</strong>start a <strong>business</strong> or talk about a <strong>job opportunity</strong>, feel free to reach out!
                </p>
            </div> */}
            
            {/* <div className="container__about-textRight">
                <p>
                    Today, I run <strong>BLOB Agency</strong>, a <strong>Webdesign</strong> company with incredible talents such as <a href="https://www.linkedin.com/in/alexiane-grieu-864084152/"><em>Alexiane Grieu</em></a>, UI/UX Designer.
                </p>
            </div> */}
            
        </section>
    )
}

export default About;