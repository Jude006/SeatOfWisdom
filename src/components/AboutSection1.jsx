import React from "react";
import { FaCheck } from "react-icons/fa";
import img from '../assets/images/school building.jpg'

const AboutSection1 = () => {
  return (
    <section className="relative  py-16 md:py-24">
   
      <div className=" mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center gap-12">
       
        <div className="flex-1 text-start md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-poppins">
            Welcome to Seat Of Wisdom Private School
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-open">
            At Seat Of Wisdom Private School, we pride ourselves on
            delivering holistic education that shapes future leaders. Our focus
            is on academic excellence, moral integrity, and empowering our
            students to thrive in a dynamic world. Discover a community where
            every student is inspired to unlock their full potential.
          </p>
          <ul className="text-gray-800 space-y-4 font-open">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3 flex items-center text-accent"><FaCheck className="text-sm" /></span>
              State-of-the-art facilities for learning and innovation.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-secondary rounded-full mr-3 flex items-center text-sm"><FaCheck className="text-sm" /></span>
              A team of highly qualified and passionate educators.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-3 flex items-baseline text-accent"><FaCheck className="text-sm" /></span>
              An environment that promotes discipline and excellence.
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <div className="relative w-full h-96 md:h-[500px] shadow">
            <img
              src={img}
              alt="School building"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25 rounded-lg"></div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default AboutSection1;
