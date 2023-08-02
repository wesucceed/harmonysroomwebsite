import React from "react";
import NavBar from "../NavBar";
import HeroSection from "./HeroSection";
import MissionSection from "./MissionSection";
import ValuesSection from "./ValuesSection";
import StatsSection from "./StatsSection";

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <NavBar></NavBar>
            <HeroSection></HeroSection>
            <MissionSection></MissionSection>
            <ValuesSection></ValuesSection>
            <StatsSection></StatsSection>
        </div>
    )
}

export default AboutPage;