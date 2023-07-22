import React from "react";

const StatsSection = () => {
    const image1 = "";
    const image2 = "";
    const image3 = "";
    const image4 = "";

    const title1 = "Mental health is impacting our youth";
    const title2 = "73% of teenagers feel sometimes or always alone";
    const title3 = "Schools had an estimated ratio of 1 psychologist to every 1381 students";

    const description1 = `GenZ is facing a loneliness epidemic as 1 in 5 youth experience mental health struggles`;

    const description2 = `That means in every class, approximately 7 out of 10 people are struggling with loneliness.`;

    const description3 = `There is a gap of up to 63,000+ mental health professionals in schools nationwide which is only widening.`;

    return (
        <div className = "StatssSection">
            <h3>Stats</h3>
            
            <div>
            <h2>Why?</h2>
            <h2>Because self-care is healthcare</h2>
            </div>

            <div>
                <StatsCard image = {image1} title = {title1} description = {description1}></StatsCard>
                <StatsCard image = {image2} title = {title2} description = {description2}></StatsCard>
                <StatsCard image = {image3} title = {title3} description = {description3}></StatsCard>
            </div>
            
        </div>
    )
}

function StatsCard({image, title, summary, description}) {
    return (
      <div className="StatsCard">
        {/* <img>{image}</img> */}

        <div className = "StatsCardText">
            <h4 className="StatsCardTitle">{title}</h4>
            <h2 className="StatsCardSummary">{summary}</h2>
            <p className="StatsCardDescription">{description}</p>
        </div>

      </div>
    );
  }


export default StatsSection;




