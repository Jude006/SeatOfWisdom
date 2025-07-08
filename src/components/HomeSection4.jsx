import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/facility1.png";
import img2 from "../assets/images/facility2.png";
import img3 from "../assets/images/facility3.png";
import img4 from "../assets/images/facility4.png";
import img5 from "../assets/images/facility5.png";
import img6 from "../assets/images/facility6.png";

const HomeSection4 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="md:py-16 py-16 md:px-6 px-2 lg:px-28">
      {/* Heading Section */}
      <div className="flex flex-col gap-3 font-poppins">
        <motion.h1
          className="md:text-5xl text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Facilities
        </motion.h1>
        <motion.p
          className="md:text-lg text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          A great learning institute always begins with a great facility.
        </motion.p>
      </div>

      {/* Grid Section */}
      <motion.main
        className="md:grid hidden lg:grid-cols-6 md:grid-cols-4 grid-cols-2 my-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Facility Items */}
        <motion.div
          className="bg-[#48CFAF] h-[27vh] flex justify-center items-center"
          variants={itemVariants}
        >
          <img src={img1} alt="" className="object-contain" />
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <h1 className="font-open font-semibold">Friendly Environment</h1>
        </motion.div>
        <motion.div
          className="bg-secondary h-[27vh] flex justify-center items-center"
          variants={itemVariants}
        >
          <img src={img2} alt="" className="object-contain" />
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <h1 className="font-open font-semibold">Computer Room</h1>
        </motion.div>
        <motion.div
          className="bg-[#DE322E] h-[27vh] flex justify-center items-center"
          variants={itemVariants}
        >
          <img src={img3} alt="" className="object-contain" />
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <h1 className="font-open font-semibold">Qualified Teachers</h1>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <h1 className="font-open font-semibold">Science Laboratory</h1>
        </motion.div>
        <motion.div
          className="bg-[#48CFAF] h-[27vh] flex justify-center items-center"
          variants={itemVariants}
        >
          <img src={img4} alt="" className="object-contain" />
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <h1 className="font-open font-semibold">School Bus</h1>
        </motion.div>
        <motion.div
          className="bg-secondary h-[27vh] flex justify-center items-center"
          variants={itemVariants}
        >
          <img src={img5} alt="" className="object-contain" />
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <h1 className="font-open font-semibold">Adequate Security</h1>
        </motion.div>
        <motion.div
          className="bg-[#DE322E] h-[27vh] flex justify-center items-center"
          variants={itemVariants}
        >
          <img src={img6} alt="" className="object-contain" />
        </motion.div>
      </motion.main>

        {/* Mobile View */}
        <motion.main
        className="grid md:hidden grid-cols-2 gap-4 my-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Mobile Facility Items */}
        <motion.div
          className="bg-[#48CFAF] h-[27vh] flex justify-center items-center"
          variants={itemVariants}
        >
          <img src={img1} alt="" className="object-contain" />
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <h1 className="font-open font-semibold text-center">Friendly Environment</h1>
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <h1 className="font-open font-semibold text-center">Computer Room</h1>
        </motion.div>
        <motion.div
          className="bg-secondary h-[27vh] flex justify-center items-center"
          variants={itemVariants}
        >
          <img src={img2} alt="" className="object-contain" />
        </motion.div>
        <motion.div
          className="bg-[#DE322E] h-[27vh] flex justify-center items-center"
          variants={itemVariants}
        >
          <img src={img3} alt="" className="object-contain" />
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <h1 className="font-open font-semibold text-center">Qualified Teachers</h1>
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <h1 className="font-open font-semibold text-center">Science Laboratory</h1>
        </motion.div>
        <motion.div
          className="bg-[#48CFAF] h-[27vh] flex justify-center items-center"
          variants={itemVariants}
        >
          <img src={img4} alt="" className="object-contain" />
        </motion.div>
        <motion.div
          className="bg-secondary h-[27vh] flex justify-center items-center"
          variants={itemVariants}
        >
          <img src={img5} alt="" className="object-contain" />
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <h1 className="font-open font-semibold text-center">School Bus</h1>
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
        >
          <h1 className="font-open font-semibold text-center">Adequate Security</h1>
        </motion.div>
        <motion.div
          className="bg-[#DE322E] h-[27vh] flex justify-center items-center"
          variants={itemVariants}
        >
          <img src={img6} alt="" className="object-contain" />
        </motion.div>
      </motion.main>
    </section>
  );
};

export default HomeSection4;
