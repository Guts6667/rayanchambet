import React, { useState } from "react";
import { useEffect } from "react";
import PortfolioCard from "../PortfolioCard";
import "./Portfolio.scss"

/**
 * Portfolio
 * @returns {JSX} React Component
 */
const Portfolio = () => {

    const [dataCard, setDataCard] = useState(undefined);
    useEffect(() => {
    fetch("/data/portfolio.json")
    .then((res) => res.json())
    .then((res) => setDataCard(res));
    }, [])
    return(
dataCard && (
<section className="container__portfolio" id="portfolio">
            <h2>
                PORTFOLIO
            </h2>
            <div className="container__portfolio-card">
            {dataCard && (
                dataCard.map((data) => {
                    return(<PortfolioCard data = {data} key={data.id}/>)

                })
            )}
            </div>
            
        
        </section>
)
        
    )
}

export default Portfolio;