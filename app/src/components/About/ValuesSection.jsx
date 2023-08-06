import React from "react";
// import home_1 from "../../assets/home-1.jpg"
import first from "../../../src/assets/portrait-smiley-teenage-girl.jpg"
import second from "../../../src/assets/second.jpg"
import third from "../../../src/assets/third.jpg"
import fourth from "../../../src/assets/fourth.jpg"
import ValueCard from "./ValueCard";


const ValuesSection = () => {
    const image1 = first;
    const image2 = second;
    const image3 = third;
    const image4 = fourth;

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
            <h2>Our Values</h2>
            <ValueCard image = {image1} title = {title1} summary = {summary1} description = {description1} value={"value1"}></ValueCard>
            <ValueCard image = {image2} title = {title2} summary = {summary2} description = {description2} value={"value2"}></ValueCard>
            <ValueCard image = {image3} title = {title3} summary = {summary3} description = {description3} value = {"value3"}></ValueCard>
            <ValueCard image = {image4} title = {title4} summary = {summary4} description = {description4} value = {"value4"}></ValueCard>

        </div>
    )
}


export default ValuesSection;




