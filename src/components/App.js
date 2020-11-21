import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevious = () => {
    let index = currentIndex;
    if (index === 0) {
      return;
    }
    setCurrentIndex(index - 1);
  };

  const handleNext = () => {
    let index = currentIndex;
    if (index === 4) {
      return;
    }
    setCurrentIndex(index + 1);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
  };

  return (
    <>
      <div>
        <h1 data-testid="title">{slides[currentIndex].title}</h1>
        <p data-testid="text">{slides[currentIndex].text}</p>
      </div>
      <div>
        <button
          disabled={currentIndex === 0}
          onClick={handlePrevious}
          data-testid="button-prev"
        >
          Previous Slide
        </button>
        <button
          disabled={currentIndex === 4}
          onClick={handleNext}
          data-testid="button-next"
        >
          Next Slide
        </button>
        <button
          disabled={currentIndex === 0}
          onClick={handleRestart}
          data-testid="button-restart"
        >
          Restart Slide
        </button>
      </div>
    </>
  );
};

export default App;
