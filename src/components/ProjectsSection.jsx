import { useState } from "react";

import erp from "../assets/projects/erp.jpg";
import seo from "../assets/projects/seo.jpg";
import web from "../assets/projects/web2.jpg";
import software from "../assets/projects/software2.jpg";

export default function ProjectsSection() {
  const projects = [
    {
      title: "EnterpriseX ERP Suite",
      description: "A custom ERP platform streamlining operations, HR, inventory and finance.",
      features: ["Centralized dashboard", "Real-time data synchronization", "Advanced reporting", "Scalable architecture"],
      image: erp
    },
    {
      title: "SEO Growth Engine",
      description: "SEO platform improving search ranking and website traffic.",
      features: ["Keyword research automation", "Technical SEO audit", "Competitor tracking", "Traffic analytics"],
      image: seo
    },
    {
      title: "TaskFlow Web App",
      description: "Modern project management and collaboration web application.",
      features: ["Task dashboards", "Team collaboration", "Real-time updates", "Analytics reports"],
      image: web
    },
    {
      title: "LedgerLink Accounting",
      description: "Cloud accounting software for businesses.",
      features: ["Invoice automation", "Financial reporting", "Secure cloud storage", "Tax modules"],
      image: software
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#a41d24] mb-4">
          Our Projects
        </h2>
        <p className="text-center text-gray-700 mb-16 text-sm md:text-base">
          Visit Our Latest Projects And Our Innovative Works
        </p>

        {/* Projects Grid */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT: Project Titles */}
          <div className="flex-shrink-0 lg:w-1/4 space-y-4">
            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`cursor-pointer p-4 md:p-5 rounded-lg font-semibold transition text-sm md:text-base
                  ${active === i
                    ? "bg-[#a41d24] text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
              >
                {String(i + 1).padStart(2, "0")}. {p.title}
              </div>
            ))}
          </div>

          {/* IMAGE */}
          <div className="lg:w-2/4 flex justify-center">
            <img
              src={projects[active].image}
              className="rounded-xl shadow-xl w-full max-h-96 object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="lg:w-1/4">
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              {projects[active].description}
            </p>

            <h3 className="font-bold text-lg md:text-xl mb-4 text-[#1f1f1f]">
              Key Features
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              {projects[active].features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#a41d24] font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}