// import React from "react";

import teamPhoto from "../../assets/team-photo.jpg"
import Harmony from "../../assets/Harmony.jpeg"

export const Team = () => {  
  return(
    <div>
      <div style={{color:'black'}} className="header">
        <h3>Team</h3>
      </div>
      <div style={{color:'black'}} className="team-photo">
        <h4>Our Team</h4>
        <div className="image-container">
          <div className="image">
            <img style={{ width: 450, height: 400 }} src={teamPhoto} alt="team"/>
          </div>
        </div>
        <div className="indiv-image-container">
          <img style={{ width: 100, height: 100 }} src={Harmony} alt="team"/>
          <h5>CEO</h5>
          <h4>Harmony Prado</h4>

          <img style={{ width: 100, height: 100 }} src={Harmony} alt="team"/>
          <h5>CEO</h5>
          <h4>Harmony Prado</h4>

          <img style={{ width: 100, height: 100 }} src={Harmony} alt="team"/>
          <h5>CEO</h5>
          <h4>Harmony Prado</h4>

          <img style={{ width: 100, height: 100 }} src={Harmony} alt="team"/>
          <h5>CEO</h5>
          <h4>Harmony Prado</h4>

          <img style={{ width: 100, height: 100 }} src={Harmony} alt="team"/>
          <h5>CEO</h5>
          <h4>Harmony Prado</h4>

          <img style={{ width: 100, height: 100 }} src={Harmony} alt="team"/>
          <h5>CEO</h5>
          <h4>Harmony Prado</h4>

          <img style={{ width: 100, height: 100 }} src={Harmony} alt="team"/>
          <h5>CEO</h5>
          <h4>Harmony Prado</h4>
        </div>
        
        
      </div>
    </div>
    
  )
}