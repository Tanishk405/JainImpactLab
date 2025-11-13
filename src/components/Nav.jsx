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

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 rounded-full transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-lg md:text-xl font-bold text-gray-900">
            Jain Impact Labs
          </span>
        </Link>

        {/* Desktop Nav — visible on screens 1024px+ */}
        <ul className="hidden lg:flex items-center gap-5 text-gray-700 font-medium whitespace-nowrap">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="hover:text-indigo-600 transition-colors duration-200 text-[15px]"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li>
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-3 py-2 rounded-lg shadow text-[14px] hover:bg-indigo-700"
            >
              Let’s Talk
            </Link>
          </li>

          <li>
            <Link
              to="/brochure"
              className="border border-indigo-600 text-indigo-600 px-3 py-2 rounded-lg text-[14px] hover:bg-indigo-50"
            >
              Download Brochure
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle — visible below 1024px */}
        <button
          className="lg:hidden text-3xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:hidden bg-white shadow-xl border-t border-gray-100"
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  to={link.to}
                  className="block w-full py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="w-full text-center">
              <Link
                to="/contact"
                className="block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 w-11/12 mx-auto"
                onClick={() => setIsOpen(false)}
              >
                Let’s Talk
              </Link>
            </li>

            <li className="w-full text-center">
              <Link
                to="/brochure"
                className="block border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 w-11/12 mx-auto"
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
