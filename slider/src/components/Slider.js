import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.png";

const Container = styled.div`
  width: 60%;
  margin-top: 200px;
  margin-left: 20%;
  overflow: hidden;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  border: none;
  position: absolute;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Slider = () => {
  const totalSlide = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();

  const moveNextSlide = () => {
    if (currentSlide >= totalSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const movePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
        <Slide img={img5} />
        <Slide img={img6} />
        <Slide img={img7} />
        <Slide img={img8} />
        <Slide img={img9} />
      </SliderContainer>
      <Button onClick={movePrevSlide} style={{ marginTop: "-180px" }}>
        〈
      </Button>
      <Button
        onClick={moveNextSlide}
        style={{ marginTop: "-180px", marginLeft: "1300px" }}
      >
        〉
      </Button>
    </Container>
  );
};

export default Slider;
