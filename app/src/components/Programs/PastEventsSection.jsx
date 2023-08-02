import React from "react";
import event1 from "../../../src/assets/Event1.png"
import event2 from "../../../src/assets/Event2.png"
import event3 from "../../../src/assets/Event3.png"



const PastEventsSection = () => {
    return (
        <div className="PastEventsSection">
            <div className="pasteventsectionbody">
                <h3>Past Events</h3>
                <h2>Growth Tracks</h2>
                <p>Growth tracks are a culmination of both self-paced mental health lessons and 
                quided workshops with licensed mental health providers and non-profits!</p>
            </div>
            <div className="pasteventcard pasteventsectionbody">
                <div>
                    <h4>#GirlsGuide</h4>
                    <h2>To Resilience: Thriving,Not Surviving</h2>
                    <p>Our multi week series focused on cultivating healthy mindsets and
                        combating negative thought patterns. With the transition to a new
                        school year, we talk about handling zoom fatique, burnout, and how
                        to revive our study habits by focusing on what matters most: our
                        mental health. Our 3 part lessons touch on grief, acceptance, and
                        coping with change.
                    </p>
                </div>
                <img src= {event1}></img>
            </div>
            <div className="pasteventcard pasteventsectionbody">
                <img src={event2}></img>
                <div>
                    <h4></h4>
                    <h2>Moving from Empathy to Action</h2>
                    <p>Our first one week series highlighting the intersectionality between
                        generational trauma and mental health. Joined by Rashida Hameed.
                        community leader and founder Epiphany Women in Focus and
                        community activists: Nyaduoth Gatkuoth and Tristvn Thomas
                        (founder of Beyond Borders), we center Black voices and amplify the
                        importance of both allyship and self-care for anxiety.
                    </p>
                </div>
            </div>
            <div className="pasteventcard pasteventsectionbody">
                <div>
                    <h4>#CommunityConversation</h4>
                    <h2>Compassion & Communication </h2>
                    <p>Joined with the Bloom Foundation, a non-profit organization for
                        girls, we engage in real, authentic discussions about why
                        communicating our true emotions and expressing our thoughts can
                        be so difficult, especially in BIPOC households. Using nonviolent
                        communication framework by psychologist Marshall B Rosenberg,
                        we learn about self-awareness in recognizing our true needs for
                        belongingness, acceptance, and support and how to express that in
                        our relationships with ourselves, each other, and our family during
                        quarantine.
                    </p>
                </div>
                <img src= {event1}></img>
            </div>
            <div className="pasteventcard pasteventsectionbody">
                <img src={event3}></img>
                <div>
                    <h4>Self-Care Sisterhood</h4>
                    <h2>Girls Night</h2>
                    <p>Giveaways and chill nights decompressing about our weeks! A safe
                        space to honestly talk about how we feel about reopening and
                        navigating our "new normal."
                    </p>
                </div>
            </div><div className="pasteventcard pasteventsectionbody">
                <div>
                    <h4>Self-Care Sisterhood</h4>
                    <h2>Coping During COVID-19 Crisis</h2>
                    <p>Our first event ever! Talking about healthy coping strategies and
                        skills for anxiety during this adverse time amidst quarantine and
                        shut-down.
                    </p>
                </div>
                <img src={event1}></img>
            </div>

        </div>
    )
}

export default PastEventsSection;