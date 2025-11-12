import React from "react";
import { motion } from "framer-motion";

// ✅ Importing client logos
import abInbev from "../assets/clients/ab-inbev.png";
import kontoor from "../assets/clients/kontoor.png";
import sterling from "../assets/clients/sterling.png";
import e2e from "../assets/clients/e2e.png";
import strides from "../assets/clients/strides.jpg";
import tcs from "../assets/clients/tcs.png";
import wipro from "../assets/clients/wipro.png";
import sap from "../assets/clients/sap.jpg";
import toyota from "../assets/clients/toyota.png";
import hsbc from "../assets/clients/HSBC.png";
import iimk from "../assets/clients/IIMK.png";
import iima from "../assets/clients/IIMA.png";

const clients = [
  { src: abInbev, name: "AB InBev" },
  { src: kontoor, name: "Kontoor" },
  { src: sterling, name: "Sterling" },
  { src: e2e, name: "E2E" },
  { src: strides, name: "Strides" },
  { src: tcs, name: "TCS" },
  { src: wipro, name: "Wipro" },
  { src: sap, name: "SAP" },
  { src: toyota, name: "Toyota" },
  { src: hsbc, name: "HSBC" },
  { src: iimk, name: "IIMK" },
  { src: iima, name: "IIMA" },
];

const Clients = () => {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden relative">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-indigo-600">Clientele & Impact Stories</span>
        </motion.h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          A sample of partners we’ve worked with and outcomes delivered.
        </p>
      </div>

      {/* ✅ Auto-scrolling Client Logos */}
      <div className="relative overflow-hidden max-w-6xl mx-auto group h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px]">
        <motion.div
          className="absolute w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          animate={{ y: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          whileHover={{ y: 0 }}
        >
          {[...clients, ...clients].map((client, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center bg-gray-50 rounded-xl p-5 hover:shadow-lg transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-12 sm:max-h-14 md:max-h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Featured Impact */}
      <div className="max-w-5xl mx-auto mt-16 text-left">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-indigo-50 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="font-semibold text-gray-800 text-lg">
            Featured Impact
          </h3>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
            <li>
              <strong>AB InBev:</strong> AI-driven skills ontology — 30% reduction in skill gaps.
            </li>
            <li>
              <strong>Sterling Holidays:</strong> 'Sterling Academy' — +15% engagement in 18 months.
            </li>
            <li>
              <strong>Kontoor Brands:</strong> Digitized 75 modules, reduced onboarding time by 40%.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* ✅ Industries We Transform Section */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Industries <span className="text-indigo-600">We Transform</span>
        </motion.h3>

        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          We have delivered impact across a diverse spectrum of industries:
        </p>

        <motion.div
          className="bg-indigo-50 p-8 rounded-2xl shadow-sm max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <ul className="text-gray-700 text-lg leading-relaxed space-y-3">
            <li>IT/ITES & GCCs | Manufacturing & Pharma | Retail & FMCG | Infrastructure & Real Estate</li>
            <li>BFSI & Insurance | Hospitality & Travel | Research & Development | Academia & EdTech</li>
            <li>Public Sector & NGOs</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
