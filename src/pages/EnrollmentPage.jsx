import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import enrol from '../assets/images/enrol.jpg';

const EnrollmentPage = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [tuition, setTuition] = useState("");

  const classes = [
    { name: "Nursery", tuition: "₦50,000 per term" },
    { name: "Primary", tuition: "₦70,000 per term" },
    { name: "Junior Secondary", tuition: "₦100,000 per term" },
    { name: "Senior Secondary", tuition: "₦120,000 per term" },
  ];

  const handleClassChange = (e) => {
    const selected = classes.find((cls) => cls.name === e.target.value);
    setSelectedClass(selected.name);
    setTuition(selected.tuition);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("enrollment-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <section
        style={{ backgroundImage: `url(${enrol})` }}
        className="relative bg-blue-600 text-accent py-28 md:py-32 md:min-h-fit mih-h-[70vh]"
      >
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <motion.h1
            className="text-2xl md:mt-0 mt-3 md:text-5xl font-bold font-poppins md:mb-6 mb-3"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Enroll Your Child Today!
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-light font-open mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Join our community of bright minds and future leaders. Let’s make
            the enrollment process smooth and exciting for you!
          </motion.p>
          <motion.button
            onClick={scrollToForm}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              text="Start Enrollment"
              bgColor="bg-secondary"
              textColor="text-primary"
            />
          </motion.button>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins">
            Easy Enrollment Process
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "Step 1",
                title: "Choose a Class",
                description:
                  "Select the class that suits your child’s academic level.",
                icon: "📝",
              },
              {
                step: "Step 2",
                title: "Fill the Form",
                description:
                  "Provide all required details in the enrollment form.",
                icon: "📄",
              },
              {
                step: "Step 3",
                title: "Confirm & Submit",
                description:
                  "Review your details and complete the enrollment process.",
                icon: "✅",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg text-center font-open"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <div className="text-5xl">{item.icon}</div>
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                <p className="text-primary mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="enrollment-form" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins">
            Enrollment Form
          </h2>
          <form className="max-w-2xl mx-auto bg-gray-50 p-8 shadow-lg rounded-lg font-open">
            <div className="mb-6">
              <label
                htmlFor="class"
                className="block text-lg font-medium text-gray-700"
              >
                Select Class
              </label>
              <select
                id="class"
                name="class"
                onChange={handleClassChange}
                className="w-full p-3 mt-2 border rounded-lg"
              >
                <option value="">-- Choose a Class --</option>
                {classes.map((cls) => (
                  <option key={cls.name} value={cls.name}>
                    {cls.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedClass && (
              <motion.div
                className="mb-6 p-4 bg-blue-100 border-l-4 border-blue-500 rounded"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-blue-700">
                  Tuition for <strong>{selectedClass}</strong>: {tuition}
                </p>
              </motion.div>
            )}

            <div className="mb-6">
              <label
                htmlFor="student-name"
                className="block text-lg font-medium text-gray-700"
              >
                Student's Name
              </label>
              <input
                id="student-name"
                name="student-name"
                type="text"
                className="w-full p-3 mt-2 border rounded-lg"
                placeholder="Enter your child's full name"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="parent-name"
                className="block text-lg font-medium text-gray-700"
              >
                Parent's Name
              </label>
              <input
                id="parent-name"
                name="parent-name"
                type="text"
                className="w-full p-3 mt-2 border rounded-lg"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full p-3 mt-2 border rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="text-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button text="Submit" bgColor="bg-secondary" />
              </motion.div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default EnrollmentPage;
