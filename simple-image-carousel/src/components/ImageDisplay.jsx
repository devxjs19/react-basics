import { useState } from "react";

import Buttons from "./Buttons";

import img1 from "./../assets/0.jpg";
import img2 from "./../assets/1.jpg";
import img3 from "./../assets/2.jpg";
import img4 from "./../assets/3.jpg";
import img5 from "./../assets/4.jpg";
import img6 from "./../assets/5.jpg";
import img7 from "./../assets/6.jpg";
import img8 from "./../assets/7.jpg";
import img9 from "./../assets/8.jpg";
import img10 from "./../assets/9.jpg";
import img11 from "./../assets/10.jpg";
import img12 from "./../assets/11.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const ImageDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="image-display">
      Image Display
      <img src={images[currentIndex]} alt="" />
      <Buttons />
    </div>
  );
};

export default ImageDisplay;
