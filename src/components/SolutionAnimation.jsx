import Solution from "../lottie/SOLUTIONS.json";
import React from "react";
import Lottie from "lottie-react";


const SolutionsAnimation = () => {
  return (
    <div className="flex justify-center items-center w-full mt-8 mb-6 -ml-8">
      <div className="w-64 sm:w-72 md:w-80 lg:w-96">
        <Lottie animationData={Solution} loop={true} />
      </div>
    </div>
  );
};

export default SolutionsAnimation;