import React from "react";
import { motion } from "framer-motion";
import SolutionsAnimation from "../components/SolutionAnimation";
import {
  Award,
  Layers,
  Briefcase,
  Settings,
  Cpu,
} from "lucide-react";

const solutions = [
  {
    Icon: Award,
    title: "Talent & Leadership Transformation",
    desc: "We build pipelines of future-ready leaders through sustained, experiential journeys.",
    bullets: [
      "Signature Experiential Programs: Outbound Leadership (OBL), Adventure-Based Learning, and Business Simulations.",
      "Sustained Development Journeys: First-Line Leader Ascend, Manager Excellence Ignite, and Leadership Evolution programs.",
      "High-Potential Acceleration: Custom tracks using Assessment & Development Centres (ADCs) and executive coaching.",
      "Behavioral & Soft Skills Mastery: Interventions powered by Belbin, MBTI, DISC, and NLP.",
    ],
  },
  {
    Icon: Layers,
    title: "Organizational Design & Development",
    desc: "We architect the blueprints for high-performing, agile organizations.",
    bullets: [
      "Organization Structuring & Role Clarity.",
      "Competency Framework Development.",
      "Job Analysis & JD Harmonization (using AI-tools).",
      "KRA & KPI Cascade.",
    ],
  },
  {
    Icon: Briefcase,
    title: "Strategic HR Consulting",
    desc: "We build the strategic HR function from the ground up.",
    bullets: [
      "HR Function Setup & Maturity Modeling.",
      "Compensation & Benefits Structuring.",
      "Performance Management System (PMS) Design.",
      "Career Architecture & Pathing.",
    ],
  },
  {
    Icon: Settings,
    title: "HR Operations & Digital Transformation",
    desc: "We create efficient, scalable, and employee-centric HR engines.",
    bullets: [
      "HR Policy Suite Formulation.",
      "HRMS Selection & Implementation.",
      "Payroll Structuring & Governance.",
      "Employee Experience & Engagement (Surveys, R&R, Helpdesks).",
    ],
  },
  {
    Icon: Cpu,
    title: "People Analytics & AI",
    desc: "We bring the future of HR into your present.",
    bullets: [
      "Predictive Talent Analytics.",
      "Skills Ontology & Future-Readiness.",
      "Impact & ROI Dashboards (Tableau / Power BI).",
      "Research & Insights Lab: Custom research on Gamification, Intergenerational Learning, and Market Benchmarking.",
    ],
  },
];

const Solutions = () => {
  return (
    <section className="bg-gradient-to-br from-white to-indigo-50 py-20 px-6">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Our <span className="text-indigo-600">Solutions</span>: The Master Fold Portfolio
        </motion.h2>

           <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <SolutionsAnimation />
        </motion.div>

        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          We offer a mosaic of interconnected services, designed to address the complete talent lifecycle.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 * i, duration: 0.6 }}
            className="p-8 rounded-2xl bg-white border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <s.Icon className="w-10 h-10 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">{s.desc}</p>
                <ul className="text-gray-700 list-disc list-inside space-y-1 text-sm leading-relaxed">
                  {s.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
