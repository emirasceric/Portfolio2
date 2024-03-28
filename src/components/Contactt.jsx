import React, { useState } from 'react';
import styles from './Contactt.module.css';
import { komikult, leaderboard, math } from '../assets';


const Contactt = () => {
  const [activePanel, setActivePanel] = useState(null);

  const panelImages = [
    'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  ];

  const urls1 = [
    'https://example.com/1',
    'https://example.com/2',
    'https://example.com/3',
    'https://example.com/4',
    'https://example.com/5'
  ];
  const urls2 = [
    'https://example.com/11',
    'https://example.com/22',
    'https://example.com/32',
    'https://example.com/42',
    'https://example.com/52'
  ];

  const redirectToUrl = (url) => {
    window.open(url, '_blank');
  };

  // Ažurirana funkcija za postavljanje aktivnog panela
  const handlePanelClick = (index) => {
    if (activePanel === index) {
      // Ako je kliknuti panel već aktivan, deaktiviraj ga
      setActivePanel(null);
    } else {
      // Ako nije, postavi ga kao aktivnog
      setActivePanel(index);
    }
  };

  return (
    <div className={styles.container}>
      {panelImages.map((image, index) => (
        <div
          key={index}
          className={`${styles.panel} ${activePanel === index ? styles.active : ''}`}
          style={{ backgroundImage: `url('${image}')` }}
          onClick={() => handlePanelClick(index)}
        >
          <h3 className={styles.h3} style={{ opacity: activePanel === index ? 1 : 0, transition: 'opacity 0.3s ease-in' }}>
            {['Explore The World', 'Wild Forest', 'Sunny Beach', 'City on Winter', 'Mountains - Clouds'][index]}
          </h3>
          <div style={{ opacity: activePanel === index ? 1 : 0 }}>
            <button className={styles.button1} onClick={(e) => {e.stopPropagation(); redirectToUrl(urls1[index]);}}>Button 1
            
            </button>
            <button className={styles.button2} onClick={(e) => {e.stopPropagation(); redirectToUrl(urls2[index]);}}>Button 2</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contactt;
