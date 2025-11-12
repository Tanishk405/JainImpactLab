import React from "react";
import Lottie from "lottie-react";
import processAnim from "../lottie/Processing (1).json"; // ✅ your new animation file

const ProcessAnimation = () => {
  return (
    <Lottie
      animationData={processAnim}
      loop={true}
      style={{ width: 200, height: 200, margin: "auto" }}
    />
  );
};

export default ProcessAnimation;
