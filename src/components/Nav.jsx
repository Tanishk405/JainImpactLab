// src/components/Nav.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Our Philosophy", to: "/philosophy" },
    { name: "Solutions", to: "/solutions" },
    { name: "Consulting Ensemble", to: "/ensemble" },
    { name: "Clients", to: "/clients" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ✅ Only Logo Section Adjusted */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={logo}
              alt="Jain Impact Labs Logo"
              className="w-12 h-12 object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-indigo-700 transition-colors">
              Jain Impact Labs
            </span>
          </motion.div>
        </Link>

        {/* ✅ Desktop Nav (Unchanged) */}
        <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="hover:text-indigo-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition-all"
            >
              Let’s Talk
            </Link>
          </li>
          <li>
            <Link
              to="/brochure"
              className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all"
            >
              Download Brochure
            </Link>
          </li>
        </ul>

        {/* ✅ Mobile Toggle */}
        <button
          className="md:flex lg:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ✅ Mobile Menu (Unchanged) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:flex lg:hidden flex-col bg-white shadow-xl border-t border-gray-100"
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  to={link.to}
                  className="block w-full py-2 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="w-full text-center">
              <Link
                to="/contact"
                className="block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all w-11/12 mx-auto my-1"
                onClick={() => setIsOpen(false)}
              >
                Let’s Talk
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                to="/brochure"
                className="block border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-all w-11/12 mx-auto my-1"
                onClick={() => setIsOpen(false)}
              >
                Download Brochure
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Nav;
