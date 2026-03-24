import { motion } from "framer-motion";
import React, { useState, useRef } from "react";

// Flag icon for the contact prefix
const FlagIcon = () => (
  <span className="text-xl" role="img" aria-label="Pakistan Flag">
    🇵🇰
  </span>
);

export default function CareersPage() {
  // Form state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactPrefix: "+92",
    contactNumber: "",
    jobTitle: "",
    message: "",
  });

  const [resumeFileName, setResumeFileName] = useState("No file chosen");
  const fileInputRef = useRef(null);

  const jobTitleTextColor = formState.jobTitle
    ? "text-slate-950"
    : "text-slate-400";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setResumeFileName(file.name);
    else setResumeFileName("No file chosen");
  };

  // --- UPDATED HANDLESUBMIT ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData for file upload
    const formData = new FormData();
    formData.append("firstName", formState.firstName);
    formData.append("lastName", formState.lastName);
    formData.append("email", formState.email);
    formData.append(
      "phone",
      `${formState.contactPrefix} ${formState.contactNumber}`,
    );
    formData.append("job", formState.jobTitle);
    formData.append("message", formState.message);

    // Asli file yahan se uthayenge
    if (fileInputRef.current.files[0]) {
      formData.append("resume", fileInputRef.current.files[0]);
    }

    try {
      const response = await fetch(
        "https://mastek-backend-new.onrender.com/api/career",
        {
          method: "POST",
          // Note: FormData ke sath Content-Type header manually nahi lagate
          body: formData,
        },
      );

      const data = await response.json();

      if (data.success) {
        alert("Application Sent Successfully!");
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          contactPrefix: "+92",
          contactNumber: "",
          jobTitle: "",
          message: "",
        });
        setResumeFileName("No file chosen");
      } else {
        alert("Failed to send application.");
      }
    } catch (err) {
      alert("Server error. Please try again.");
    }
  };
  // ----------------------------

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="bg-[#f7f7f7] min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          Careers At <span className="text-[#a41d24]">Mastek</span>
        </motion.h1>

        {/* HIRING PROCESS */}
        <section className="mb-24">
          <h2 className="text-center text-sm md:text-base tracking-widest text-[#a41d24] font-bold mb-12">
            OUR HIRING PROCESS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Application",
                desc: "Submit your application along with your resume.",
              },
              {
                step: "02",
                title: "Interview",
                desc: "Our team reviews your profile and schedules interview.",
              },
              {
                step: "03",
                title: "Offer Placement",
                desc: "Selected candidates receive official offer.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={stepVariants}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="bg-[#a41d24] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* APPLY FORM */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold mb-10 text-[#a41d24] text-center md:text-left"
          >
            APPLY NOW
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 bg-slate-50/50 rounded-3xl border border-slate-100 shadow-sm max-w-5xl mx-auto"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-12">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleInputChange}
                    placeholder="Mike"
                    required
                    className="w-full px-5 py-3.5 border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-red-200 focus:border-red-400 text-sm transition-all shadow-inner"
                  />
                  <p className="text-xs text-slate-400 mt-2 pl-1">
                    Enter your first name here
                  </p>
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleInputChange}
                    placeholder="Anderson"
                    required
                    className="w-full px-5 py-3.5 border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-red-200 focus:border-red-400 text-sm transition-all shadow-inner"
                  />
                  <p className="text-xs text-slate-400 mt-2 pl-1">
                    Enter your last name here
                  </p>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full px-5 py-3.5 border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-red-200 focus:border-red-400 text-sm transition-all shadow-inner"
                  />
                  <p className="text-xs text-slate-400 mt-2 pl-1">
                    Enter your email address
                  </p>
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-red-200 focus-within:border-red-400 transition-all shadow-inner">
                    <div className="flex items-center gap-2 px-4 bg-slate-100 border-r border-slate-200 text-sm font-medium text-slate-600">
                      <FlagIcon />
                      <span>{formState.contactPrefix}</span>
                    </div>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formState.contactNumber}
                      onChange={handleInputChange}
                      placeholder="301 2345678"
                      pattern="[0-9]*"
                      required
                      className="flex-1 px-5 py-3.5 border-none focus:ring-0 text-sm transition-all"
                    />
                  </div>
                  <p className="text-xs text-slate-400 mt-2 pl-1">
                    Example: 301 1122331
                  </p>
                </div>

                {/* Job Title */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="jobTitle"
                    value={formState.jobTitle}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-5 py-3.5 border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-red-200 focus:border-red-400 text-sm transition-all shadow-inner appearance-none ${jobTitleTextColor}`}
                  >
                    <option value="">-Choose an option-</option>
                    <option value="software-developer">
                      Software Developer
                    </option>
                    <option value="ui-ux-designer">UI/UX Designer</option>
                    <option value="project-manager">Project Manager</option>
                    <option value="qa-engineer">QA Engineer</option>
                  </select>
                  <p className="text-xs text-slate-400 mt-2 pl-1">
                    Select your job title
                  </p>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Upload your Resume <span className="text-red-500">*</span>
                  </label>
                  <div className="relative border border-slate-200 rounded-lg text-sm bg-white transition-all shadow-inner flex overflow-hidden">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf"
                      required
                      className="sr-only"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      className="bg-slate-100 border-r border-slate-200 text-slate-800 text-sm font-semibold px-5 py-3.5 hover:bg-slate-200 transition"
                    >
                      Choose file
                    </button>
                    <span className="flex-1 text-slate-400 px-5 py-3.5 text-sm line-clamp-1">
                      {resumeFileName}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 pl-1">
                    Please upload your CV in .pdf format.
                  </p>
                </div>
              </div>

              {/* Cover Letter */}
              <div className="mb-14">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message / Cover Letter
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Write something..."
                  className="w-full px-5 py-4 border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-red-200 focus:border-red-400 text-sm transition-all shadow-inner h-40 resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-10 py-3.5 bg-slate-950 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition shadow-md active:scale-95"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
