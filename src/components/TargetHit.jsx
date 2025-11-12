import React from "react";
import Lottie from "lottie-react";
import targetHit from "../lottie/Target Hit!.json"; // path adjust karo agar alag hai

const TargetHitAnimation = () => {
  return <Lottie animationData={targetHit} loop={true} style={{ width: 200, height: 200, margin: "auto" }} />;
};

export default TargetHitAnimation;
