/* eslint-disable react/no-unescaped-entities */
// import { Navbar } from "../NavBar/NavBar";

import home_1 from "../../assets/home-1.jpg"
import nbc from "../../assets/NBC.png"
import fowler from "../../assets/FowlerBusinessCompetition.jpeg"
import laub from "../../assets/LAUrbanLeague.png"
import shec from "../../assets/SheCatalyst.jpeg"

export const Home = () => {
  return (
    <div>
      <div style={{color:'black'}} className="title">
        <h2> Home </h2>
      </div>

      {/* Insert Navbar here later */}
      <div style={{color:'black'}} className="header">
        <img style={{ width: 550, height: 400 }} src={home_1}/>
        <h3> Harmony's Room </h3>
        <h4> Your Safe Space </h4>
        <button>Download app</button>
        <button>About this app</button>
      </div>

      <div style={{color:'black'}} className="our-community">
        <h2>Our Community</h2>
        <h4>Community</h4>
        <h4>Mental Health</h4>
        <h4>Racial Empowerment</h4>
      </div>

      <div className="partners" >
        <img style={{ width: 120, height: 120 }} src={nbc}/>
        <img style={{ width: 120, height: 120 }} src={fowler}/>
        <img style={{ width: 120, height: 120 }} src={laub}/>
        <img style={{ width: 120, height: 120 }} src={shec}/>
      </div>

      <div style={{color:'black'}} className = "text">
        <h2>A safe space for emotional empowerment and inclusion ✨</h2>
        <p>We focus on uplifting teens and managing emotional health through a social cycle of positivity. Join our community to access resources that strengthen your mindset and support others in their journey with daily encouragement! You’ll also be able to get support from our partnered mental health advisers and programs.</p>
      </div>

      <div style={{color:'black'}} className="beta-services">
        <h4>Beta platform - services</h4>
        <h2>Care & Inclusion 💙</h2>
        <h5>Our community of teens, aged 12-19 focuses on emotional empowerment and inclusion</h5>
      </div>
      
    </div>
  );
};