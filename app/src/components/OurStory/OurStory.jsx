import React from "react";
import ourstory from "../../assets/ourstory.png"



export const OurStory = () => {  
  return(
    <div>
      <div style={{color:'black'}} className="our-story">
        <h2>Our Story</h2>
      </div>
      <div className="story-container">
        <img style={{ width: 200, height: 300 }} src={ourstory} alt="team"/>
        <div style={{color:'black'}} className="story">
          <h3>Who we are</h3>
          <p>
            Growing up, I encountered very challenging situations such as bullying and sexual harassment. Because of this, I struggled with overwhelming emotions of negativity, doubt, frustration, fear, and anxiety which hindered me from enjoying life for the beauty that it is. At my lowest point, I lost my voice.

            It was a journey to reclaim my power, and to reclaim my voice. As I told my story unapologetically, I was comforted by so many others who experienced the same. We shared tears. We shared valleys and peaks. We healed together. It was their stories, their support, their genuine and radiant love that inspired Harmony’s Room. Sisterhood is what taught me the power of unity. From this, I found a deep passion for emotionally supporting girls, especially in at risk communities like where I am from. With the help of my family, my friends, faith community, and my martial arts instructor especially, I found my balance and learned to embrace my struggles and use it as stepping stones. It’s time to heal a generation, and raise the wave of empowered girls, who will lead the nation.

            My experience taught me that my identity is not found in the storm, rather my strength comes from confronting the eye of storm.</p>
        </div>
      </div>

      <div style={{color:'black'}} className="our-services">
        <h5>Our Services</h5>
        <h2>Join Our Platform</h2>
        <p>Join the self-care sisterhood</p>
        <div className="services">
          <div className="mental-health">
            <h3>Mental Health Education</h3>
            <p>Pre-register for our community sessions & self-care sisterhood events!</p>
          </div>
          <div className="digital">
            <h3>Digital Connection</h3>
            <p>Guided conversations with mental health professionals</p>
          </div>
          <div className="free">
            <h3>The Service Is Free</h3>
            <p>No charge, no cost ever!</p>
          </div>
        </div>


        <div style={{color:'black'}} className="upcoming-events">
          <h5>Upcoming Projects</h5>
          <h2>Our Team Is Preparing For Our App Launch!</h2>
          <p>Stay tuned for more updates to come!</p>

          <div className="speakers">
            <h3>Partners & Speakers</h3>
            <h2>Previous Speakers</h2>
            <h5>Here is some of our speakers and partners!</h5>
          </div>

          <div className="slide">
            <p>slide place holder</p>
          </div>
        </div>

        <div className="insight">
          <h5>Blog</h5>
          <h3>My Insights & Articles</h3>
          <h5>New articles coming soon!</h5>
        </div>
      </div>
    </div>
  )
}