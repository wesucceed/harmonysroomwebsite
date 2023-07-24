import React from "react";
import NavBar from "./NavBar";
import ProgramsIntro from "./ProgramsIntro";
import EventsSections from "./EventsSection";
import PastEventsSection from "./PastEventsSection";

const ProgramsPage = () => {
    return (
        <div className="ProgramsPage">
            <NavBar></NavBar>
            <ProgramsIntro></ProgramsIntro>
            <EventsSections></EventsSections>
            <PastEventsSection></PastEventsSection>
        </div>
    )
}

export default ProgramsPage;