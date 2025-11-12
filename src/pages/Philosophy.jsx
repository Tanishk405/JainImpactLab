import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Settings, Brain, Layers } from "lucide-react";
import ManFly from "../components/ManFly"; // ✅ optional animated origami reuse

const Philosophy = () => {
  return (
    <section className="relative mt-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6 overflow-hidden">
      {/* Floating background effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1.2 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-10 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-50"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1.1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full filter blur-3xl opacity-40"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8"
        >
          Our <span className="text-indigo-600">Philosophy:</span> The Origami of Organizational Success
        </motion.h1>

        {/* Short Intro */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-16"
        >
          At <b>Jain Impact Labs</b>, we see the untapped potential within every organization. Like a single
          sheet of paper, an organization holds infinite possibilities. Our role is that of a master origami
          artist — we apply precise, strategic folds through <b>Purpose</b>, <b>People</b>, and <b>Process</b>{" "}
          to transform raw potential into a beautiful, resilient, and high-performing structure.
        </motion.p>

        {/* Origami Animation (center visual) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-64 md:w-80 mx-auto mb-16"
        >
          <ManFly />
        </motion.div>

        {/* Origami Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mt-10">
          {/* PURPOSE */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
          >
            <Lightbulb className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Purpose is the Design
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Every origami masterpiece begins with a clear vision and design.
              We help you define and crystallize your organizational purpose —
              your core vision and strategic direction. This blueprint guides
              every fold, ensuring all efforts align toward a single, elegant outcome.
            </p>
          </motion.div>

          {/* PEOPLE */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
          >
            <Users className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              People are the Paper
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The paper itself—its quality and grain—represents your people.
              We respect the uniqueness of every individual and unfold their
              capabilities carefully, guiding them to become part of a stronger,
              more integrated whole.
            </p>
          </motion.div>

          {/* PROCESS */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
          >
            <Settings className="w-12 h-12 text-indigo-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Process is the Fold
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The science of origami lies in the precision of its folds.
              Our processes—strategic HR systems, experiential learning
              journeys, and data-driven frameworks—add strength and functionality,
              building complexity and capability layer by layer.
            </p>
          </motion.div>
        </div>

        {/* Evolution Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white rounded-3xl shadow-xl p-10 md:p-14 text-left max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-shrink-0">
              <Layers className="w-16 h-16 text-white opacity-90" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                The Evolution from Art to Science
              </h2>
              <p className="text-base md:text-lg leading-relaxed opacity-95">
                Just as modern origami intertwines ancient art with mathematical
                precision, <b>Jain Impact Labs</b> fuses the <i>art</i> of human
                understanding with the <i>science</i> of data analytics and
                evidence-based research. We don't just create something
                beautiful — we engineer organizations that are structurally sound,
                adaptable, and designed for lasting impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
