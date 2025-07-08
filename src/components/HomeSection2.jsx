import React from "react";
import { FaSchool, FaHardHat, FaBook, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const HomeSection2 = () => {
  const stats = [
    { icon: <FaSchool className="text-teal-400 text-3xl" />, percentage: "100%", label: "Integrity", borderColor: "border-teal-400" },
    { icon: <FaHardHat className="text-yellow-400 text-3xl" />, percentage: "99%", label: "Hardwork", borderColor: "border-yellow-400" },
    { icon: <FaBook className="text-red-400 text-3xl" />, percentage: "86%", label: "Discipline", borderColor: "border-red-400" },
    { icon: <FaAward className="text-blue-400 text-3xl" />, percentage: "96%", label: "Moral value", borderColor: "border-blue-400" },
  ];

  const containerVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut", 
      },
    },
  };

  return (
    <section className="md:pt-8 md:pb-8 pt-4 pb-20 gap-20 items-center md:px-6 px-12 lg:px-28 font-poppins">
      <motion.div
        className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-20 gap-8"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center py-2 px-1 border ${stat.borderColor} border-dashed rounded-xl transform hover:scale-105 transition-all duration-300`}
            variants={itemVariant}
          >
            <div className="mb-4">{stat.icon}</div>
            <p className="text-3xl font-bold text-gray-800 mb-2">{stat.percentage}</p>
            <p className=" text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HomeSection2;
