import React from "react";
import event1 from "../../src/assets/Event1.png"
import event2 from "../../src/assets/Event2.png"
import event3 from "../../src/assets/Event3.png"


const EventsSections = () => {
    return (
        <div className="EventsSections">
            <div>
                <img src={event1}></img>
                <img src={event2}></img>
                <img src={event3}></img>
                <img src={event1}></img>
            </div>
            <div>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
            </div>
            
        </div>
    )
}

export default EventsSections;