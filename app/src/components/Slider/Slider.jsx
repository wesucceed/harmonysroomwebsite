/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import * as ReactDOM from "react-router-dom";
import "./Slider.css";

function Slider() {
  const quotes = [
  { 
    quote: "Rashida states her Purpose is To continue to Learn, Grow and Teach others.” She continues to do this by using restorative healing circles and providing group therapy using Trauma Informed care, and emotional support/intelligence. Rashida is a Community mentor graduate of Alliant University, she is also a Graduate of the RISE Urban Leadership academy at the University of San Diego, she is certified in Restorative practices, Trauma Informed Care, Mental Health First Aid, Domestic Violence Awareness and Financial literary. Rashida Serves on several community boards and actively advocates for the women and children in the community.",
    author: "Rashida Hameed"
  },
  { 
    quote: "Ms. Rasheedah Rashada is a San Diego community leader. Growing up in Southeast evoked a deep sense of purpose to serve under-represented communities through community outreach, program development-implementation, and providing essential resources to promote health and wellness. With over 20 years of experience in community-based projects, she currently provides students with accessible resources and emotional support.",
    author: "Rasheedah Rashada"
  },
  { 
    quote: "Tristyn Thomas is a rising freshman at Stanford University. She is the founding CEO of the nonprofit Youth for Border Aid, and strives to advocate for social change. Tristyn has interned in the office of Assemblymember Dr. Shirley Weber and at the La Jolla Institute for Immunology.",
    author: "Tristyn Thomas"
  }
  // {
  //   quote: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
  //   author: "Albert Einstein"
  // },
  // {
  //   quote: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
  //   author: "Jane Austen"
  // }  
];
  const [quoteData, getQuoteData] = React.useState(quotes);
  const [current, setCurrent] = React.useState(0);
  const [quote, getQuote] = React.useState(quoteData[current])
  
  React.useEffect(
    () => getQuote(quoteData[current]), 
    [current, quote]
  )
  
  const dotPicksQuote = (e) => setCurrent(Number(e.target.id))
  
  console.log(current)
  return (
    <div className="slide-total">
      <div className="slideshow-container">
        <Slide quote={quote} />
        {/* <Arrows nextQuote={nextQuote}
                prevQuote={prevQuote} /> */}
      </div>
      <Dots dotQty={quoteData} 
            current={current}
            dotPicksQuote={dotPicksQuote} />
    </div>  
  )
}

function Slide({quote}) {
  return (
    <div className="mySlides">
      <q>{quote.quote}</q>
      <p className="author">&mdash;{quote.author}</p>
    </div>
  )
}

function Dots({dotQty, current, dotPicksQuote}) {
  return (
    <div className="dot-container">
      {
        dotQty.map((dot, i) => {
          return <span id={i} className={current === i ? "dot active" : "dot"}
                        onClick={dotPicksQuote}></span>
        })
      }
    </div>
  )
}

export default Slider;