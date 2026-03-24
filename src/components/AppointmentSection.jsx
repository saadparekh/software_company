import { motion } from "framer-motion";
import { useState } from "react";

export default function AppointmentSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://mastek-backend-new.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <section id="contact" className="bg-[#1f1f1f] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-[#a41d24] text-4xl md:text-5xl font-bold mb-8">
            Book an Appointment
          </h2>

          <p className="text-gray-300 mb-8">
            Need consultation for your project? Speak with our experts and get
            the best digital solutions tailored to your business.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📞 0331-2281979</p>
            <p>✉️ themastek.co@gmail.com</p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Best Fit Projects</h3>

            <ul className="space-y-2 text-gray-400">
              <li>• Marketing & Business Websites</li>
              <li>• Dashboards & Internal Tools</li>
              <li>• Product UI & System Upgrades</li>
            </ul>
          </div>
        </div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5 bg-[#111] p-10 rounded-2xl shadow-2xl border border-gray-800"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-[#1f1f1f] border border-gray-700"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-[#1f1f1f] border border-gray-700"
          />

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Mobile"
            className="w-full p-4 rounded-lg bg-[#1f1f1f] border border-gray-700"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Message"
            className="w-full p-4 rounded-lg bg-[#1f1f1f] border border-gray-700"
          />

          <button
            type="submit"
            className="w-full bg-[#a41d24] py-4 rounded-lg hover:bg-red-700 transition"
          >
            Book Appointment
          </button>
        </motion.form>
      </div>
    </section>
  );
}
