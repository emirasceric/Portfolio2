import React, { useState } from 'react';
import './ProjectPage.css'; // Assuming you have converted the provided SCSS to valid CSS

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      title: 'Midnight Station',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas nihil sequi doloribus obcaecati. Aut vel, recusandae ipsa voluptate blanditiis nemo magnam sit modi architecto officia maiores magni. Necessitatibus, iste aut.',
      imageUrl: 'https://picsum.photos/id/345/1000/600',
    },
    {
      title: 'The Hitchhiker',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas nihil sequi doloribus obcaecati. Aut vel, recusandae ipsa voluptate blanditiis nemo magnam sit modi architecto officia maiores magni. Necessitatibus, iste aut.',
      imageUrl: 'https://picsum.photos/id/352/1000/600',
    },
    {
      title: 'Missing Pages',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas nihil sequi doloribus obcaecati. Aut vel, recusandae ipsa voluptate blanditiis nemo magnam sit modi architecto officia maiores magni. Necessitatibus, iste aut.',
      imageUrl: 'https://picsum.photos/id/444/1000/600',
    },
    {
      title: 'Uninvited Guests',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas nihil sequi doloribus obcaecati. Aut vel, recusandae ipsa voluptate blanditiis nemo magnam sit modi architecto officia maiores magni. Necessitatibus, iste aut.',
      imageUrl: 'https://picsum.photos/id/451/1000/600',
    },
  ];

  return (
    <main>
      <header>
        <h2><span>Table</span> of content</h2>
      </header>
      <section>
        <ul className='indexes'>
          {tabsData.map((_, index) => (
            <li key={index} onClick={() => setActiveTab(index)}>
              {`0${index + 1}`}
            </li>
          ))}
        </ul>
        <ul className='tabs'>
          {tabsData.map((tab, index) => (
            <li key={index} className={`tab ${activeTab === index ? 'active' : ''}`}>
              <article className='tab-content'>
                <h3>{tab.title}</h3>
                <p>{tab.content}</p>
                <button>Read More</button>
              </article>
              <div className='tab-image'>
                <img src={tab.imageUrl} alt={tab.title} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ProjectPage;
