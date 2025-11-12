import React from "react";
import Lottie from "lottie-react";
import dataAnim from "../lottie/Man flying on paper airplane.json"; // ✅ your uploaded animation

const ManFly = () => {
  return (
    <div className="w-64 md:w-96 mx-auto">

    <Lottie
      animationData={dataAnim}
      loop={true}
      />
    </div>
  );
};

export default ManFly;
