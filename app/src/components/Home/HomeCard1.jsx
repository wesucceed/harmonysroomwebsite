import React from "react";

function HomeCard1({icon, summary, soon}) {
    return (
      <div className="HomeCard1">
          <img src={icon}></img>
          <p className="HomeCard1CardSummary">{summary}</p>
          <p className={"available" + {soon}}>Available soon</p>
      </div>
    );
  }


export default HomeCard1;




