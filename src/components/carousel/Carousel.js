import React, { useState, useEffect, useRef } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "./SliderStyle.css";

const Carousel = (props) => {
  const [currIndex, setCurrImg] = useState(0);
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    console.log(props.slides[0]);
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, props.autoPlay * 1000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (currIndex === props.slides.length - 1) {
      console.log("last index", props.slides.length - 1);
      setCurrImg(0);
    } else {
      setCurrImg(currIndex + 1);
    }
  };

  const prevSlide = () => {
    currIndex > 0 && setCurrImg(currIndex - 1);
  };

  return (
    <div className="slide__container">
      <div className="img-slider">
        <div className="slide">
          <img src={props.slides[currIndex].img} />
          <div className="info">
            <h2>{props.slides[currIndex].title}</h2>
            <p>{props.slides[currIndex].subtitle}</p>
          </div>
        </div>

        <div className="left" onClick={prevSlide}>
          <FaChevronCircleLeft color="white" />
        </div>
        <div className="right" onClick={nextSlide}>
          <FaChevronCircleRight color="white" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
