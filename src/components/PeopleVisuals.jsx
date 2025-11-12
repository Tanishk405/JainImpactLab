import React from "react";

const PeopleVisuals = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Our Team & Impact</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {["Person 1", "Person 2", "Person 3"].map((name, idx) => (
          <div key={idx} className="w-60 h-60 bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <span className="text-xl font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PeopleVisuals;
