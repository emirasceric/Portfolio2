import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Project.module.css';
import { CConverter, learning, ecomerce } from '../assets';
import { fadeIn } from '../utils/motion';
import { textVariant } from '../utils/motion';

const cardData = [
  {
    id: 6,
    title: "Card 1",
    backgroundImage: CConverter,
    buttonUrls: {
      button1: "https://www.klix.ba/",
      button2: "https://example.com/link2"
    }
  },
  {
    id: 7,
    title: "Card 2",
    backgroundImage: learning,
    buttonUrls: {
      button1: "https://example.com/link1",
      button2: "https://example.com/link2"
    }
  },
  {
    id: 8,
    title: "Card 3",
    backgroundImage: ecomerce,
    buttonUrls: {
      button1: "https://example.com/link1",
      button2: "https://example.com/link2"
    }
  },
  {
    id: 9,
    title: "Card 4",
    backgroundImage: CConverter,
    buttonUrls: {
      button1: "https://example.com/link1",
      button2: "https://example.com/link2"
    }
  },
  {
    id: 10,
    title: "Card 5",
    backgroundImage: CConverter,
    buttonUrls: {
      button1: "https://example.com/link1",
      button2: "https://example.com/link2"
    }
  }
];

const Project = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  const handleButtonClick = (url) => {
    window.open(url, '_blank'); // Ovo će otvoriti link u novom tabu
  };
  

  const cardVariants = {
    expanded: { width: "600px" },
    collapsed: { width: '200px' }
  };

  return (

    <div>
    
    <motion.div variants={textVariant()}>
    <section id="project-section"></section>
      <p className="overview">Projects</p>
    </motion.div>

    
    <div className="textSirina">
      Diving into my portfolio, you'll get a taste of the projects that I'm most proud of, from the ones I started
      with to the latest ones I’ve crafted. They're not just a showcase of my tech skills but also a peek into how
      I tackle challenges and turn ideas into reality. Each project comes with a bit of backstory about the tech I
      used and what we achieved with it. You'll find a mix of cool visuals—mainly photos—that make it all a bit
      more relatable and fun to explore.<br /><br />
      These projects are hosted on Vercel, which gives you a smooth and fast experience when checking
      them out. Whether you're looking at my early experiments or my recent professional work, you’ll see the
      progression in my skills and my approach to solving problems. If you want to dive deeper, each project
      is linked to more detailed insights and is easily accessible. And for those who are curious to see a
      broader range of my activities, my GitHub page is just a click away, filled with all sorts of projects that
      reflect my journey and growth in the tech world.
      </div>


    
    <div id={styles.cardContainer}>
      
      {cardData.map((card, index) => (
        <motion.div 
          key={card.id}
          id={styles.card}
          onClick={() => handleCardClick(index)}
          animate={expandedIndex === index ? 'expanded' : 'collapsed'}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          style={{ backgroundImage: `url(${card.backgroundImage})` }}
        >
          {expandedIndex === index && (
            <div id={styles.cardButtons}>

              <button id={styles.button}onClick={(e) => {
                e.stopPropagation();
                handleButtonClick(card.buttonUrls.button1);}}>Button 1</button>

              <button id={styles.button}onClick={(e) => {
                e.stopPropagation(); 
                handleButtonClick(card.buttonUrls.button2);}}>Button 2</button>
            </div>
          )}
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Project;
