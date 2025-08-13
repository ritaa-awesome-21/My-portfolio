// src/components/Slider.jsx
import React, { useState } from 'react';

const Slider = ({ items, renderCard, sectionId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div className="slide" key={index}>
            {renderCard(item)}
          </div>
        ))}
      </div>
      <button className="prev" onClick={goToPrevious}>&#10094;</button>
      <button className="next" onClick={goToNext}>&#10095;</button>
    </div>
  );
};

export default Slider;