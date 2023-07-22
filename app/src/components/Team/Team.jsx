import React from "react";

import teamPhoto from "../../assets/team-photo.jpg"

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
        
        
      </div>
    </div>
    
  )
}