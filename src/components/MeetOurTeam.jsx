import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/principal.jpg";
import img2 from "../assets/images/teacher1.jpg";
import img3 from "../assets/images/teacher2.jpg";
import img4 from "../assets/images/teacher3.jpg";

const team = [
  {
    name: "Dr. Elizabeth Johnson",
    position: "Principal",
    image: img1,
    description: "With over 20 years of experience in education, Dr. Johnson leads with vision, passion, and dedication to academic excellence.",
  },
  {
    name: "Mr. Andrew Parker",
    position: "Science Teacher",
    image: img2,
    description: "A STEM enthusiast, Mr. Parker inspires students to innovate and explore the wonders of science.",
  },
  {
    name: "Mrs. Clara Adams",
    position: "Math Teacher",
    image: img3,
    description: "With a knack for numbers, Mrs. Adams makes math engaging and relatable for all students.",
  },
  {
    name: "Mr. Jude Orifa",
    position: "English Teacher",
    image: img4,
    description: "Ms. Blake fosters a love for literature and critical thinking in her classroom.",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="py-16 px-6 lg:px-24 bg-accent">
      <div className="flex flex-col gap-6 text-center mb-12">
        <h1 className="text-4xl font-bold font-poppins text-gray-800">
          Meet Our Team
        </h1>
        <p className="text-lg font-open text-gray-600">
          Our dedicated educators inspire, nurture, and prepare students for a brighter future.
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow p-6  transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover flex justify-center rounded-full border-4 border-secondary mb-4"
            />
            <h3 className="text-xl text-center text-nowrap font-bold font-poppins text-gray-800">
              {member.name}
            </h3>
            <p className="text-secondary font-open text-sm font-semibold">
              {member.position}
            </p>
            <p className="text-gray-600 text-center text-sm mt-4 font-open">
              {member.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
