import React, { useState } from "react";
import { useEffect } from "react";
import PortfolioCard from "../PortfolioCard";

const Portfolio = () => {
  
     

    // const scroller = (event) => {
    //     let containerPortfolio = document.querySelector('.container__portfolio-card');
    //     let arrow = event.target;
    //     let cards = document.querySelectorAll('article');
    

    //     if(arrow.classList.contains("chevron-left")){
           
    //         containerPortfolio.scrollBy(-5, 0)
    //     } else{
    //         containerPortfolio.scrollTo(60, 200)
    //     }
        

        
    // }
    

    const [dataCard, setDataCard] = useState(undefined);
    useEffect(() => {
    fetch("/data/portfolio.json")
    .then((res) => res.json())
    .then((res) => setDataCard(res));
    }, [])
    return(
dataCard && (
<section className="container__portfolio">
            <h2>
                PORTFOLIO
            </h2>
            <div className="container__portfolio-card">
                <img src="/assets/chevron-left-solid.svg" alt="arrow-left" className="chevron chevron-left" />
            {dataCard && (
                dataCard.map((data) => {
                    return(<PortfolioCard data = {data} key={data.id}/>)

                })
                
            )}
                <img src="/assets/chevron-right-solid.svg" alt="arrow-left" className="chevron chevron-right"  />
            </div>
            
        
        </section>
)
        
    )
}

export default Portfolio;