import React, {  useState } from "react";
import "../Style.css";
import "./About.css";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import ReactCardFlip from 'react-card-flip';
import { scrollToSection } from './scrollToSection';
import { frontend, learning, ecomerce } from '../assets';


const cardData = [
  {
    id: 1,
    frontTitle: "Code Meets Design",
    frontIcon: frontend,
    frontText: "Intuitive Interfaces, Engaging Experiences",
    backTitle: "Full-Stack Mastery",
    backText: ` My professional journey seamlessly blends the art of front-end and back-end development, ensuring a cohesive and efficient digital experience.
                The foundation of my skills is solidly built on a deep understanding of UI/UX design principles, allowing me to create intuitive and engaging interfaces.
                I have navigated through a wide array of projects in to the development of comprehensive e-commerce platforms 
                My work in crafting immersive visual experiences has not only enhanced user engagement but also deepened my appreciation for meticulous design.`
  },
  {
    id: 2,
    frontTitle: "Innovation Through Learning",
    frontIcon: learning,
    frontText: "Tech Frontier Explorer",
    backTitle: "Innovation Architect",
    backText: `Driven by an unyielding thirst for knowledge, I am perpetually on the hunt for the latest technological advancements.
              My exploration into Machine Learning and Artificial Intelligence is fueled by a desire to harness these technologies for innovative solutions.
              I am always keen to adopt new technologies, viewing them as opportunities to expand my skill set and push the boundaries of what is possible.
              Leading initiatives that challenge my abilities has become a fundamental part of my growth as a developer.
              Through continuous learning, I strive to stay at the forefront of the industry, ensuring that my expertise remains relevant and cutting-edge.
              My journey is a testament to my dedication to excellence in software development, with a constant aim to bridge gaps between complex backend 
              logic and user-friendly front-end design`
  },
  {
    id: 3,
    frontTitle: "E-Commerce Success Path",
    frontIcon: ecomerce,
    frontText: "Passionate Knowledge Sharing",
    backTitle: " Going beyond coding",
    backText: ` With a diverse background that
                includes a years in outlet sales which includes softwer developments 
                and and all kinds of analytics, 5 years in regional sales manager
                wich includes lots of softwer developments excel analitcs,
                and a lifelong immersion in digital marketing,
                photo/video editing, I bring a unique perspective
                to the table. My experience as an e-commerce store owner on WP,registered in BiH,
                for the past 3 successful years has provided me with invaluable
                insights into a variety of markets and niches. This has only fueled
                my passion for learning and sharing knowledge. As a natural
                extrovert, I find my stride in team environments, where I can
                contribute to a common goal. I am a firm believer in the power of
                collaboration and its ability to produce synergistic outcomes.`
  },
];

const About = () => {
  // State objekat koji prati da li je svaka kartica okrenuta
  const [cardsFlipState, setCardsFlipState] = useState({ 1: false, 2: false, 3: false });

  const toggleCardFlip = (cardId) => {
    setCardsFlipState((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId], // Ovdje prebacujemo stanje određene kartice
    }));
  };
  const handleContactLinkClick = (e) => {
    e.preventDefault(); // Sprječava defaultno ponašanje veze
    const contactSection = document.getElementById('contacts-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (

    <div id="About">
      
      <motion.div      
          className="glavniDio"
          variants={fadeIn('down', 'tween', 0.5, 1)}          
        >
       
          <p className="interduction">INTRODUCTION</p>
          <p className="overview">Overview</p>
        </motion.div>

        
        <div className="textSirina">

            Greetings and welcome to my portfolio! As I embark on my journey as a junior developer, <br />
            I am fueled by a passion for innovation and a relentless drive to expand my knowledge.<br /> 
            Despite the label "junior," I bring a wealth of enthusiasm and a fresh perspective to each<br />
            project I tackle.My journey into the world of development is more than just about writing code;<br />
            it's about solving real-world problems and making a tangible impact.I encourage you to explore <br />
            my work and join me on this exciting path of continuous learning and growth.
        </div>

    <div className="cards-container">
    <section id="about-section"></section>
      {cardData.map((card) => (
        <ReactCardFlip key={card.id} isFlipped={cardsFlipState[card.id]} flipDirection="horizontal">
          {/* Front side of the card */}

          <div className="card" >
            <div className="card-details">
              <p className="text-title-front">{card.frontTitle}</p>
              <img  className="card-icon" src={card.frontIcon} alt="Card icon" />
              <p className="text-body-front">{card.frontText}</p>
            </div>
            <button className="card-button" onClick={() => toggleCardFlip(card.id)} >
           Show more
          </button>
          </div>

          {/* Back side of the card */}
          <div className="card card-back">
            <div className="card-details">
              <p className="text-title-back">{card.backTitle}</p>
              <p className="text-body-back">{card.backText}
                 </p>
            </div>
            <button className="card-button" onClick={() => toggleCardFlip(card.id)}>
           Show less
          </button>
          </div>
        </ReactCardFlip>
      ))}

        
    </div>
    <p className="textSirina skip">
         Skip the fancy animations part and head straight to the{" "}
         <a href="#contacts" className="link" style={{ color: 'red' }} onClick={(e) => {
              e.preventDefault();
              scrollToSection("contacts-section");
              }}>
              contacts
          </a>

        {' '}section to schedule a meeting with me!
      </p>

    </div>

  );
};

export default About;

