import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-20"
        >
          Careers At <span className="text-[#a41d24]">Mastek</span>
        </motion.h1>

        {/* HIRING PROCESS */}
        <section className="mb-24">

          <h2 className="text-center text-sm tracking-widest text-[#a41d24] font-bold mb-12">
            OUR HIRING PROCESS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition"
            >

              <div className="bg-[#a41d24] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6">
                01
              </div>

              <h3 className="font-semibold text-lg mb-3">
                Application
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                Submit your application through our website along
                with your resume and portfolio.
              </p>

            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition"
            >

              <div className="bg-[#a41d24] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6">
                02
              </div>

              <h3 className="font-semibold text-lg mb-3">
                Interview
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                Our recruitment team evaluates your technical
                skills, experience and problem solving ability.
              </p>

            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition"
            >

              <div className="bg-[#a41d24] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6">
                03
              </div>

              <h3 className="font-semibold text-lg mb-3">
                Offer Placement
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                Successful candidates receive an official offer
                to join the Mastek team.
              </p>

            </motion.div>

          </div>

        </section>


        {/* APPLY FORM */}

        <section>

          <h2 className="text-2xl font-bold mb-10 text-[#a41d24]">
            APPLY NOW
          </h2>

          <div className="bg-white shadow-lg rounded-xl p-10 border">

            <form className="grid md:grid-cols-2 gap-6">

              {/* First Name */}
              <div>
                <label className="text-sm font-semibold">
                  First Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Mike"
                  className="w-full border rounded-md p-3 mt-2 focus:ring-2 focus:ring-[#a41d24]"
                />

                <p className="text-xs text-gray-400 mt-1">
                  Enter your first name here
                </p>
              </div>


              {/* Last Name */}
              <div>
                <label className="text-sm font-semibold">
                  Last Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Anderson"
                  className="w-full border rounded-md p-3 mt-2 focus:ring-2 focus:ring-[#a41d24]"
                />

                <p className="text-xs text-gray-400 mt-1">
                  Enter your last name here
                </p>
              </div>


              {/* Email */}
              <div>
                <label className="text-sm font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-md p-3 mt-2 focus:ring-2 focus:ring-[#a41d24]"
                />

                <p className="text-xs text-gray-400 mt-1">
                  Enter your email address
                </p>
              </div>


              {/* Contact */}
              <div>
                <label className="text-sm font-semibold">
                  Contact Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="+92 301 2345678"
                  className="w-full border rounded-md p-3 mt-2 focus:ring-2 focus:ring-[#a41d24]"
                />

                <p className="text-xs text-gray-400 mt-1">
                  Example: 333 1122331
                </p>
              </div>


              {/* Job Title */}
              <div>
                <label className="text-sm font-semibold">
                  Job Title <span className="text-red-500">*</span>
                </label>

                <select className="w-full border rounded-md p-3 mt-2 focus:ring-2 focus:ring-[#a41d24]">
                  <option>-Choose an option-</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>UI/UX Designer</option>
                  <option>Data Analyst</option>
                </select>

                <p className="text-xs text-gray-400 mt-1">
                  Select your job title from dropdown
                </p>
              </div>


              {/* Resume */}
              <div>
                <label className="text-sm font-semibold">
                  Upload your Resume <span className="text-red-500">*</span>
                </label>

                <input
                  type="file"
                  className="w-full border rounded-md p-3 mt-2"
                />

                <p className="text-xs text-gray-400 mt-1">
                  Please upload your CV in .pdf format.
                </p>
              </div>


              {/* Message */}
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">
                  Message / Cover Letter
                </label>

                <textarea
                  rows="5"
                  placeholder="Write something..."
                  className="w-full border rounded-md p-3 mt-2 focus:ring-2 focus:ring-[#a41d24]"
                ></textarea>
              </div>


              {/* Submit Button */}
              <div className="md:col-span-2">

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-3 rounded-full shadow-md hover:bg-[#a41d24] transition"
                >
                  Submit
                </motion.button>

              </div>

            </form>

          </div>

        </section>

      </div>

    </div>
  );
}