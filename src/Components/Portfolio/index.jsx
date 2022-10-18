import React, { useState } from "react";
import { useEffect } from "react";
import PortfolioCard from "../PortfolioCard";

const Portfolio = () => {

    

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