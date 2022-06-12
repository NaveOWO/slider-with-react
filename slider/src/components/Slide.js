import React from "react";
import styled from "styled-components";

const ImgContent = styled.img`
  width: 100%;
  height: 30vh;
`;

const Slide = ({ img }) => {
  return (
    <>
      <ImgContent src={img} />
    </>
  );
};

export default Slide;
