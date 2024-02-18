import React, { useState, useEffect } from 'react';
import styles from './ProjectPage.module.css';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Definicija tabsData unutar komponente
  const tabsData = [
    {
      title: 'Expenses',
      content: 'Lorem ipsumfdffffd psumfdffffd dpsumfdffffd dpsumfdffffd  dpsumfdffffd ddolor, sit amet consectetur adipisicing elit.',
      imageUrl: 'https://i.ibb.co/0qZPN66/Expenses.jpg',
      url: 'https://expenses-clone.vercel.app/',
    },
    {
      title: 'Tic Tac Toe',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      imageUrl: 'https://i.ibb.co/db4Lj2b/tic-tac-toe.jpg',
      url: 'https://tic-tac-toe-tau-ebon.vercel.app/',
    },
    {
      title: 'Curency converter',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      imageUrl: 'https://i.ibb.co/SxPsXHH/curency-Converter.jpg',
      url: 'https://curency-converter.vercel.app/',
    },
    {
      title: 'HR-menagment',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      imageUrl: 'https://i.ibb.co/0YrX5gW/hr-menadzment.jpg',
      url: 'https://hrm-clone-kohl.vercel.app/home',
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
      <section id="project-section"></section>
      <header className={styles.Naslov}>
        <h2 className={styles.Naslov}><span style={{ color: 'rgb(211,38,38)' }}>Projects</span> quick vew</h2>
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
                <button className={styles.dugme} onClick={() => window.open(tab.url, '_blank')}>Website</button>
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
