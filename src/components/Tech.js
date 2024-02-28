import React from 'react';
import styles from './Tech.module.css'; // Pretpostavimo da se stilovi nalaze u Tech.module.css

const Gallery = () => {
  const images = [
    'https://i.ibb.co/rFkV91J/HTML5-logo-and-wordmark-svg-removebg-preview.png',
    'https://i.ibb.co/NSB5Mtj/CSS3-logo-and-wordmark.png',
  
    'https://i.ibb.co/1mYMF46/vecteezy-javascript-logo-png-javascript-icon-transparent-png-27127463.png',
    'https://i.ibb.co/6Z2jY0F/React-icon-svg.png', 
    'https://i.ibb.co/P48WNyQ/Node-js-logo-svg.png',
    'https://i.ibb.co/bHc9HmV/material-ui-icon-2048x1626-on580ia9.png',
    'https://i.ibb.co/cgWnnyg/1667px-Figma-logo-svg.png', 
    'https://i.ibb.co/yN4Zn8P/1280px-Firebase-Logo-svg.png',    
    'https://i.ibb.co/7134CJY/Heidi-SQL-logo-image.png',    
    'https://i.ibb.co/kJ530sN/github-11-xxl.png',   
  ];

  return (
    <section id="Tech-section">
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div className={styles.imgBox} key={index}>
          <img src={image} alt={`Gallery item ${index + 1}`} className={styles.image}/>
        </div>
      ))}
    </div>
  </section>
);
};

export default Gallery;
