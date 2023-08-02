import React from "react"
import "./OurStory.css"
import ourstory from "../../assets/ourstory.png"
import icon1 from "../../assets/icon-mh.png"
import icon2 from "../../assets/icon-dc.png"
import icon3 from "../../assets/icon-free.png"

export const OurStory = () => {  
  return(
    <div>
      <div style={{color:'black'}} className="our-story">
        <h2>Our Story</h2>
      </div>
      <div className="story-container">
        <div className="image">
          <img style={{ width: 500, height: 650 }} src={ourstory} alt="team"/>    
        </div>
        <div style={{color:'black'}} className="story-text">
          <div className="story-title">Who we are</div>
            <div className = "story">
            Growing up, I encountered very challenging situations such as bullying and sexual harassment. Because of this, I struggled with overwhelming emotions of negativity, doubt, frustration, fear, and anxiety which hindered me from enjoying life for the beauty that it is. At my lowest point, I lost my voice.
            <br></br>
            <br></br>
            It was a journey to reclaim my power, and to reclaim my voice. As I told my story unapologetically, I was comforted by so many others who experienced the same. We shared tears. We shared valleys and peaks. We healed together. It was their stories, their support, their genuine and radiant love that inspired Harmony’s Room. Sisterhood is what taught me the power of unity. From this, I found a deep passion for emotionally supporting girls, especially in at risk communities like where I am from. With the help of my family, my friends, faith community, and my martial arts instructor especially, I found my balance and learned to embrace my struggles and use it as stepping stones. It’s time to heal a generation, and raise the wave of empowered girls, who will lead the nation.
            <br></br>
            <br></br>
            My experience taught me that my identity is not found in the storm, rather my strength comes from confronting the eye of storm.
            </div>
        </div>
      </div>

      <div style={{color:'black'}} className="our-services">
        <div className="title-1">Our Services</div>
        <div className="title-2">
          <h1>Join Our Platform</h1>
        </div>
        <div className="title-3">
          Join the self-care sisterhood
        </div>

        <div className="services">
          <div className="mental-health">
            <img src={icon1} style={{ width: 60, height: 60 }}/>
            <h3>Mental Health Education</h3>
            Pre-register for our community sessions & self-care sisterhood events!
          </div>
          <div className="digital">
            <img src={icon2} style={{ width: 60, height: 60 }}/>
            <h3>Digital Connection</h3>
            <p>Guided conversations with mental health professionals</p>
          </div>
          <div className="free">
            <img src={icon3} style={{ width: 60, height: 60 }}/>
            <h3>The Service Is Free</h3>
            <p>No charge, no cost ever!</p>
          </div>
        </div>
      </div>

      <div style={{color:'black'}} className="upcoming-events">
        <div className="ue-text-box">
        <div className="t1">Upcoming Projects</div>
        <div className="t2">Our Team Is Preparing For Our App Launch!</div>
        <div className="t3">Stay tuned for more updates to come!</div>
        </div>
      </div>

      <div className="speakers">
        <div className="title-1">Partners & Speakers</div>
        <div className="title-2"><h1>Previous Speakers</h1></div>
        <div className="title-3">Here is some of our speakers and partners!</div>
      </div>

      <div className="slide">
        <p>slide place holder</p>
      </div>
      

      <div className="insight">
        <div className="title-1">Blog</div>
        <div className="title-2"><h1>My Insights & Articles</h1></div>
        <div className="title-3">New articles coming soon!</div>
      </div>
      <div className="bottom">
        © 2023 - Harmony's Room - Safe Space for Mental Health
      </div>
    </div>
  )
}