import React from "react";
import NavBar from "./NavBar";
import ProgramsIntro from "./ProgramsIntro";
import EventsSections from "./EventsSection";
import PastEventsSection from "./PastEventsSection";

const ProgramsPage = () => {
    return (
        <div className="ProgramsPage">
            <NavBar></NavBar>
            <div className="body">
                <ProgramsIntro></ProgramsIntro>
                <EventsSections></EventsSections>
                <PastEventsSection></PastEventsSection>
            </div>
            
        </div>
    )
}

export default ProgramsPage;