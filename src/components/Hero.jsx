import React from "react";
import OrigamiAnimation from "./OrigamiAnimation";
import TargetHitAnimation from "./TargetHit";
import PeopleAnimation from "./PeopleAnimation";
import ProcessAnimation from "./ProcessAnimation";
import DataAnimation from "./DataAnimation";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-purple-50 text-center pt-20 pb-28"
    >
      {/* Floating Gradient Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.6, scale: 1.1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.6, scale: 1.2 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-24">
        {/* Origami Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-64 md:w-80 mx-auto mb-12"
        >
          <OrigamiAnimation />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          We <span className="text-indigo-600">Unfold</span> Organizational Potential.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed"
        >
          Where the{" "}
          <span className="font-semibold text-gray-800">
            Art of Human Understanding
          </span>{" "}
          meets the{" "}
          <span className="font-semibold text-indigo-700">
            Science of Data-Driven Strategy.
          </span>{" "}
          We architect resilient, high-performing organizations through the
          deliberate interplay of Purpose, People, and Process.
        </motion.p>

        {/* Key Value Cards */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-28"
        >
          {/* 🎯 Purpose-Driven Strategy */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
          >
            <div className="w-[110px] md:w-[130px] mb-5 flex items-center justify-center">
              <TargetHitAnimation />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-3">
              Purpose-Driven Strategy
            </h3>
            <p className="text-sm text-gray-600 max-w-[220px]">
              Aligning your core vision with every strategic fold.
            </p>
          </motion.div>

          {/* 👥 People-Centric Solutions */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
          >
            {/* Default natural height — no scale or overflow */}
            <div className="w-[130px] md:w-[150px] mb-5 flex items-center justify-center">
              <PeopleAnimation />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-3">
              People-Centric Solutions
            </h3>
            <p className="text-sm text-gray-600 max-w-[240px]">
              We focus on human connection, collaboration, Unlocking the inherent potential within your talent..
            </p>
          </motion.div>

          {/* ⚙️ Precision Processes */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
          >
            <div className="w-[120px] md:w-[140px] mb-5 flex items-center justify-center">
              <ProcessAnimation />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-3">
              Precision Processes
            </h3>
            <p className="text-sm text-gray-600 max-w-[230px]">
              Building robust, scalable HR systems and learning journeys.
            </p>
          </motion.div>

          {/* 📊 Data-Informed Impact */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
          >
            <div className="w-[110px] md:w-[130px] mb-5 flex items-center justify-center">
              <DataAnimation />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-3">
              Data-Informed Impact
            </h3>
            <p className="text-sm text-gray-600 max-w-[230px]">
              Measuring ROI with advanced analytics and AI.
            </p>
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="flex flex-wrap justify-center gap-5 mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Discover Our Philosophy
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-700 rounded-xl hover:bg-indigo-50 transition-all flex items-center gap-2"
          >
            Connect With Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


