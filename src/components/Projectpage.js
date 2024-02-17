import React, { useState, useEffect } from 'react';
import styles from './ProjectPage.module.css';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Definicija tabsData unutar komponente
  const tabsData = [
    {
      title: 'Midnight Station',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      imageUrl: 'https://picsum.photos/id/345/1000/600',
    },
    {
      title: 'The Hitchhiker',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      imageUrl: 'https://picsum.photos/id/352/1000/600',
    },
    {
      title: 'Missing Pages',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      imageUrl: 'https://picsum.photos/id/444/1000/600',
    },
    {
      title: 'Uninvited Guests',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      imageUrl: 'https://picsum.photos/id/451/1000/600',
    },
  ];

  useEffect(() => {
    document.body.classList.add(styles.localBodyStyle);
    return () => document.body.classList.remove(styles.localBodyStyle);
  }, []);

  const handleTabClick = index => {
    console.log("Promjena aktivnog taba na: ", index);
    setActiveTab(index);
  };

  return (
    <main className={styles.GlavniDio}>
      <header className={styles.Naslov}>
        <h2 className={styles.Naslov}><span style={{ color: 'rgb(211,38,38)' }}>Table</span> of Contents</h2>
      </header>
      <section className={styles.sekcija}>
        <ul className={styles.indexes}>
          {tabsData.map((_, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
              className={activeTab === index ? styles.activeIndex : ''}
            >
              0{index + 1}
            </li>
          ))}
        </ul>
        <ul className={styles.tabs}>
          {tabsData.map((tab, index) => (
            <li  id={styles.lista} key={index} className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}>
              <article className={styles.tabContent}>
                <h3 className={styles.naslov_teksta}>{tab.title}</h3>
                <p className={styles.sadrzaj_teksta}>{tab.content}</p>
                <button className={styles.dugme}>Read More</button>
              </article>
              <div className={styles.tab_image}>
                <img src={tab.imageUrl} alt={tab.title} className={styles.imageStyle} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
