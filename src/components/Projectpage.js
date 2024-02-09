import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';

const CarouselComponent = () => {
  const [cards, setCards] = useState([
    { id: 1, imageUrl: "https://source.unsplash.com/Z8dtTatMVMw", title: "Highlands", location: "Scotland", description: "The mountains are calling" },
    { id: 2, imageUrl: "https://source.unsplash.com/9dmycbFE7mQ", title: "Machu Pichu", location: "Peru", description: "Adventure is never far away" },
    { id: 3, imageUrl: "https://source.unsplash.com/m7K4KzL5aQ8", title: "Chamonix", location: "France", description: "Let your dreams come true" }
  ]);
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const waitForImages = () => {
      const images = document.querySelectorAll('img');
      imagesLoaded(images, initCarousel);
    };

    const initCarousel = () => {
      // GSAP animations here
      // Initialize card and background animations after images have loaded
      gsap.timeline()
        .to('.card, .info', { autoAlpha: 1 })
        .to('.loader', { autoAlpha: 0 });

      // Additional animations can be added here
    };

    waitForImages();
  }, []);

  const swapCards = (direction) => {
    // Logic to swap cards and update the current index
    setCurrent((prevCurrent) => {
      if (direction === "right") {
        return (prevCurrent + 1) % cards.length;
      } else {
        return (prevCurrent - 1 + cards.length) % cards.length;
      }
    });
  };

  return (
    <div className="app">
      <div className="cardList">
        <button className="cardList__btn btn btn--left" onClick={() => swapCards("left")}>
          {/* SVG for left arrow */}
        </button>

        <div className="cards__wrapper">
          {/* Map through cards and display them */}
        </div>

        <button className="cardList__btn btn btn--right" onClick={() => swapCards("right")}>
          {/* SVG for right arrow */}
        </button>
      </div>

      <div className="infoList">
        {/* Info component */}
      </div>

      <div className="app__bg">
        {/* Background images */}
      </div>

      <div className="loading__wrapper">
        <div className="loader--text">Loading...</div>
        <div className="loader">
          <span></span>
        </div>
      </div>

      <div className="support">
        <a href="https://twitter.com/DevLoop01" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
        <a href="https://dribbble.com/devloop01" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
      </div>
    </div>
  );
};

export default CarouselComponent;
