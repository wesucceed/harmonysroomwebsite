// import React from "react";
import "./Team.css";
import teamPhoto from "../../assets/team-photo.jpg"
import Harmony from "../../assets/Harmony.jpeg"
import JJ from "../../assets/JJ.jpg"
import Serena from "../../assets/Serena.jpg"
import Richlove from "../../assets/Richlove.jpg"
import WenLi from "../../assets/WenLi.jpg"
import Miracle from "../../assets/Miracle.jpg"
import Jeph from "../../assets/Jephthah.jpg"

export const Team = () => {  
  return(
    <div style={{width: '100%', height:'100vh'}} className="total">
      <div className="header">
          Team
      </div>
      <div style={{color:'black'}} className="team-photo">
        <h1>Our Team 🙌🏾</h1>
        <div className="image-container">
          <img src={teamPhoto} className="image"/>
        </div>
        <div className="indiv-image">
          <div className="group-title">
            Eboard Members
          </div>
          <div className="eboard-container">
            <div className="sub">
              <img style={{ width: 150, height: 150 }} src={Harmony} alt="team"/>
              <h5>CEO</h5>
              <a href="https://www.linkedin.com/in/harmonyprado/"> 
                <h4>Harmony Prado</h4>
              </a>
            </div>

            <div className="sub">
              <img style={{ width: 150, height: 150 }} src={Richlove} alt="team"/>
              <h5>CTO</h5>
              <a href="https://www.linkedin.com/in/richlove-nkansah/"> 
                <h4>Richlove Nkansah</h4>
              </a>
            </div>
          </div>

          <div className="group-title">
            Front-End Developers
          </div>
          <div className="dev-container">

            <div className="sub">
              <img style={{ width: 150, height: 150 }} src={Serena} alt="team"/>
              <h5>Developer</h5>
              <a href="https://www.linkedin.com/in/serena-yang-8137a4264/"> 
                <h4>Serena Yang</h4>
              </a>
            </div>

            <div className="sub">
              <img style={{ width: 150, height: 150 }} src={Jeph} alt="team"/>
              <h5>Back-End Developer</h5>
              <a href="https://www.linkedin.com/in/jephthah-mensah-21b033203/"> 
                <h4>Jephthah Mensah</h4>
              </a>
            </div>
            <div className="sub">
              <img style={{ width: 150, height: 150 }} src={JJ} alt="team"/>
              <h5>Back-end Developer</h5>
              <a href="https://www.linkedin.com/in/jiayi-bai-4a33a5220/"> 
                <h4>JJ Bai</h4>
              </a>
            </div>
            
            <div className="sub">
              <img style={{ width: 150, height: 150 }} src={Miracle} alt="team"/>
              <h5>Business Developer</h5>
              <a href="https://www.linkedin.com/in/miracle-zhang-b306a5231/"> 
                <h4>Miracle Zhang</h4>
              </a>
            </div>
            
            <div className="sub">
              <img style={{ width: 150, height: 150 }} src={WenLi} alt="team"/>
              <h5>Front-End Devleoper</h5>
              <a href="https://www.linkedin.com/in/wenlilai/"> 
                <h4>Wen Li Lai</h4>
              </a>
            </div>
          </div>
        </div>
        
        <div className="bottom">
          © 2023 - Harmony's Room - Safe Space for Mental Health
        </div>
      </div>
    </div>
    
  )
}