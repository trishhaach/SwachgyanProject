import React, { useState } from 'react';
import './RecentWork.css'; 
import Aditika from '../../assests/Aditika.jpg';
import craft1 from '../../assests/craft1.jpg';
import craft2 from '../../assests/craft2.jpg';
import HOC2 from '../../assests/HOC2.jpg';
import HOC3 from '../../assests/HOC3.jpg';
import HOC4 from '../../assests/HOC4.jpg';

const RecentWorkContainer = () => {
  return (
    <div className="recent-work-container">
      <h1>Our Recent Works</h1>
      <RecentWork />
    </div>
  );
};

const RecentWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    craft2,
    HOC2,
    HOC3,
    HOC4, 
    Aditika,
    craft1,
  ];

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 2, 0));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 2, images.length - 2));
  };

  return (
    <div className="Rcontainer">
      <div className="arrow left-arrow" onClick={handleLeftArrowClick}>&lt;</div>
      <img
        className="image"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      {currentIndex + 1 < images.length && (
        <img
          className="image"
          src={images[currentIndex + 1]}
          alt={`Image ${currentIndex + 2}`}
        />
      )}
      <div className="arrow right-arrow" onClick={handleRightArrowClick}>&gt;</div>
    </div>
  );
};

export default RecentWorkContainer;
