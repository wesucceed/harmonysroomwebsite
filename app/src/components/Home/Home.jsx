/* eslint-disable react/no-unescaped-entities */

import nbc from "../../assets/NBC.png"
import fowler from "../../assets/FowlerBusinessCompetition.jpeg"
import laub from "../../assets/LAUrbanLeague.png"
import shec from "../../assets/SheCatalyst.jpeg"
import NavBar from "../NavBar"
import HeroSection2 from "./HeroSection2"
import ValueCard from "../About/ValueCard"
import CommunitySection from "./CommunitySection"
import image1 from "../../assets/multiethnic-group-young-happy-students-standing-outdoors.jpg"
import AppSection from "./AppSection"



const Home = () => {
  // s2 = "Mental Health"
  // s1 = "Community"
  // s3 = "Racial Empowerment"
  return (
    <div>
      <NavBar></NavBar>

      {/* Insert Navbar here later */}
      <HeroSection2></HeroSection2> 

      {/* <CommunitySection></CommunitySection> */}

      <h2>Our Community✨</h2>
      <CommunitySection></CommunitySection>

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

      <ValueCard image = {image1} title = {"Beta Platform Services"} summary = {"Care & Inclusion 💙"} description = {"Our community of teens, aged 12-19 focuses on emotional empowerment and inclusion"} value={"value1"}></ValueCard>
      <h2>What We Provide🙌🏾</h2>
      <h2>Our App is coming soon</h2>
      <AppSection></AppSection>
      
    </div>
  );
};

export default Home;