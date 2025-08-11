import { useState } from "react";

import Buttons from "./Buttons";

const images = Array.from(
  { length: 12 },
  (_, i) => new URL(`../assets/${i}.jpg`, import.meta.url).href
);

const arrayLength = images.length;

const ImageDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToIndex = (newIndex) => {
    if (newIndex < 0) newIndex = arrayLength - 1;
    if (newIndex >= arrayLength) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="image-display">
      <div className="img-container">
        <img
          key={currentIndex}
          className="fade-in-fwd"
          src={images[currentIndex]}
          alt=""
        />

        <span className="image-counter">
          {currentIndex + 1} / {arrayLength}
        </span>
      </div>

      <Buttons
        onClickedPrev={() => goToIndex(currentIndex - 1)}
        onClickedNext={() => goToIndex(currentIndex + 1)}
      />
    </div>
  );
};

export default ImageDisplay;
