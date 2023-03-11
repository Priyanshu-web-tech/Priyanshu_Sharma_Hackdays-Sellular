import React from "react";
import "./Hero.css";
import AnimatedCursor from "react-animated-cursor";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <AnimatedCursor
        innerSize={15}
        outerSize={8}
        color="204, 255, 255"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          "select",
          "textarea",
          "p",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          ".link",
          "img"
        ]}
      />
      <div>
        <h1>Welcome to the Website</h1>
      </div>
    </div>
  );
};

export default Hero;
