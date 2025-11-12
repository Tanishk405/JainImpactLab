import React from "react";
import { FaLightbulb, FaUsers, FaProjectDiagram } from "react-icons/fa";

const values = [
  { icon: <FaLightbulb />, title: "Purpose", description: "Clear vision & mission." },
  { icon: <FaUsers />, title: "People", description: "Empowered and engaged teams." },
  { icon: <FaProjectDiagram />, title: "Process", description: "Efficient and scalable systems." },
];

const Values = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Our Core Values</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {values.map((val, idx) => (
          <div key={idx} className="flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow-md w-64 hover:scale-105 transition">
            <div className="text-5xl mb-4">{val.icon}</div>
            <h3 className="text-2xl font-semibold">{val.title}</h3>
            <p className="mt-2">{val.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
