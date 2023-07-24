import React from "react";

const ValuesSection = () => {
    const image1 = "";
    const image2 = "";
    const image3 = "";
    const image4 = "";

    const title1 = "Empowerment";
    const title2 = "Education";
    const title3 = "Growth";
    const title4 = "Sisterhood";

    const summary1 = "We uplift BIPOC voices";
    const summary2 = "We amplify mindful education as an avenue for socio-emotional wellness";
    const summary3 = "We prosper, together";
    const summary4 = "We stand united";

    const description1 = `As a BIPOC-founded organization, we believe its important to recognize how mental health 
                          disproportionately impacts people of color, specifically low-income communities.`;

    const description2 = `We amplify mindful education as an avenue for socio-emotional wellness
                          Education is integral to reducing mental health stigma.`;

    const description3 = `Even though everyone’s self-care journey looks different. The best way
                          to grow through what we go through is by healing together.`;

    const description4 = `In addition to uplifting our community, we also recognize that girls, 
                          especially girls of color, have struggled finding their own space. We 
                          believe that all girls of color deserve to feel belongingness, protection, 
                          and safety. Our organization believes if there’s no seats at the table for us, 
                          we’ll just make our own – and all the girls are invited too!`;

    return (
        <div className = "ValuesSection">
            <h3>Our Values</h3>
            <ValueCard image = {image1} title = {title1} summary = {summary1} description = {description1}></ValueCard>
            <ValueCard image = {image2} title = {title2} summary = {summary2} description = {description2}></ValueCard>
            <ValueCard image = {image3} title = {title3} summary = {summary3} description = {description3}></ValueCard>
            <ValueCard image = {image4} title = {title4} summary = {summary4} description = {description4}></ValueCard>

        </div>
    )
}

function ValueCard({image, title, summary, description}) {
    return (
      <div className="ValueCard">
        <img src={image}></img>

        <div className = "ValueCardText">
            <h4 className="ValueCardTitle">{title}</h4>
            <h2 className="ValueCardSummary">{summary}</h2>
            <p className="ValueCardDescription">{description}</p>
        </div>

      </div>
    );
  }


export default ValuesSection;




