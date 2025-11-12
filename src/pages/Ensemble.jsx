// src/pages/Ensemble.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AmanJain from "../assets/team/aman.png";


const team = [
  {
    name: "Dr. Aman Jain",
    role: "Founder & Strategic Architect",
    bio: "16+ years across HR, analytics and strategy — builds end-to-end HR ecosystems.",
    avatar: AmanJain,
  },
  {
    name: "Vinay Sirsi",
    role: "Principal Consultant - Leadership & Culture",
    bio: "Leadership pipeline design, culture interventions and inclusive leadership.",
    avatar: "/assets/team/vinay.jpg",
  },
  {
    name: "Priya Venkatesh",
    role: "Principal Consultant - Talent & Learning Sciences",
    bio: "Designs experiential learning journeys and measurement frameworks.",
    avatar: "/assets/team/priya.jpg",
  },
  {
    name: "Rashid Dwivedi",
    role: "Principal Consultant - OD & Strategic HR",
    bio: "Org design, job architecture, competency frameworks and governance.",
    avatar: "/assets/team/rashid.jpg",
  },
];

const Ensemble = () => {
  useEffect(() => {
    // ✅ Load Tagembed LinkedIn widget
    const script = document.createElement("script");
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-indigo-50 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our <span className="text-indigo-600">Consulting Ensemble</span>
        </motion.h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          A collective of practitioners, scholars and designers driving impact.
        </p>
      </div>

      {/* ✅ Team Animation */}
      {/* <motion.div
        className="max-w-md mx-auto mb-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <TeamAnimation />
      </motion.div> */}

      {/* ✅ Team Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 * i, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="relative w-20 h-20 overflow-hidden flex-shrink-0 border-2 border-indigo-100 rounded-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4 text-sm">{t.bio}</p>
          </motion.div>
        ))}
      </div>

      {/* ✅ LinkedIn Feed Section (Tagembed Widget) */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <motion.h3
          className="text-2xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Our Latest <span className="text-indigo-600">LinkedIn Updates</span>
        </motion.h3>

        <div
          className="tagembed-widget"
          style={{ width: "100%", height: "600px", overflow: "auto" }}
          data-widget-id="307337" // ✅ Replace with your Tagembed Widget ID
          data-website="1"
        ></div>
      </div>
    </section>
  );
};

export default Ensemble;
