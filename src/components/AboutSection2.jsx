import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";
import img from '../assets/images/happy children.jpg'

const AboutSection2 = () => {
  // Animation variants for the icons
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.3, duration: 0.5 },
    }),
  };

  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className=" mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="flex-1">
          <div className="relative w-full h-96 md:h-[500px]">
            <img
              src={img}
              alt="Happy students"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-25 rounded-lg"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-bold text-primary mb-6 font-poppins">
            Give Your Child the Best Start in Life
          </h2>
          <p className=" md:text-lg text-gray-700 mb-6 font-open">
            At Seat Of Wisdom Private School, we are committed to
            providing your child with the tools, skills, and values needed to
            thrive in academics and beyond. Our approach ensures every student
            receives personalized attention in a safe, nurturing environment.
          </p>

          {/* Key Benefits with Animated Icons */}
          <ul className="text-primary font-open space-y-4 mb-8">
            {[
              {
                text: "A proven track record of academic excellence and holistic development.",
                color: "bg-green-500",
              },
              {
                text: "Highly experienced teachers who are passionate about shaping the leaders of tomorrow.",
                color: "bg-blue-500",
              },
              {
                text: "A safe and secure learning environment for your peace of mind.",
                color: "bg-red-500",
              },
            
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={iconVariants}
              >
                <span
                  className={`w-6 h-6 ${item.color} rounded-full flex-shrink-0 mt-1 mr-3`}
                ></span>
                {item.text}
              </motion.li>
            ))}
          </ul>

          {/* Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/enrol">
              <Button text='Enrol Your Child Today' bgColor='bg-secondary' />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;
