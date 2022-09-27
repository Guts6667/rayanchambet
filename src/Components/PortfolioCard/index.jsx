import React from "react";

const PortfolioCard = (data) => {
  const {title, img, description, link} = data.data;



return(
    data &&(
        <article className="box-portfolio">
            <img src={`/assets/${img}`} alt={title} />
            <h3>{ title }</h3>
            <p>{ description }</p>
            <a href={link} target="blank"><button>Discover</button> </a>
        </article>  
    )
                
            )
} 

export default PortfolioCard;