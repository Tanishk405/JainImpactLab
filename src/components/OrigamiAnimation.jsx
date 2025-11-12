// src/components/OrigamiAnimation.jsx
import React from "react";
import Lottie from "lottie-react";
import origamiData from "../lottie/Origami.json";

const OrigamiAnimation = () => (
  <div className="w-64 md:w-96 mx-auto mb-10">
    <Lottie animationData={origamiData} loop={true} />
  </div>
);

export default OrigamiAnimation;
