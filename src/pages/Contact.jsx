import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png"; // ✅ Logo import

const Contact = () => {
  useEffect(() => {
    // ✅ Calendly script load karne ke liye
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-indigo-50 to-white px-6 pt-32 pb-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-md relative overflow-hidden"
        >
          {/* ✅ Large Logo on Top */}
          <div className="flex justify-center mb-8">
            <motion.img
              src={logo}
              alt="Jain Impact Labs Logo"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full shadow-lg object-contain bg-white p-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-center">
            Begin Your Transformation
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            Reach out to explore customized solutions — strategy, people
            transformation and data-driven change.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-indigo-600 mt-1" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm">contact@jainimpactlabs.com</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-indigo-600 mt-1" />
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-sm">+91 9008866556</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-indigo-600 mt-1" />
              <div>
                <div className="font-medium">Location</div>
                <div className="text-sm">
                  Bengaluru, India (Serving clients globally)
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="/brochure"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all"
            >
              Download Service Portfolio
            </a>
          </div>

          <p className="text-xs text-gray-400 mt-6 text-center">
            Or book a discovery call below.
          </p>
        </motion.div>

        {/* ✅ Right Section (Calendly Embed) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/jainimpactlabs/30min?hide_gdpr_banner=1"
              style={{
                minWidth: "100%",
                height: "700px",
                borderRadius: "12px",
              }}
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
