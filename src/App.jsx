// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import Philosophy from "./pages/Philosophy";
import Solutions from "./pages/Solutions";
import Ensemble from "./pages/Ensemble";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/ensemble" element={<Ensemble />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

