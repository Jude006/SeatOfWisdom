import React from "react";
import icon1 from "../assets/images/vision-icon.png";
import icon2 from "../assets/images/mission-icons.png";
import icon3 from "../assets/images/schorlarship.png";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <main className="grid md:grid-cols-3 grid-cols-1 md:px-2 lg:px-32 px-4 absolute lg:top-[610px] md:top-[1050px] top-[740px]  w-full z-10 text-accent">
      <motion.div
     initial={{opacity:0.2}}
     whileInView={{opacity:1}}
     transition={{duration:0.3}}
      
       className="bg-[#DA2D2B] py-10 px-6 min-h-20 flex flex-col gap-4 items-center">
        <img src={icon1} alt="vision" />
        <p className="text-2xl font-poppins font-bold">Our Vision</p>
        <p className="text-center font-open">
          {" "}
          The vision of Amazing Grace Comprehensive college, Ota is to be the
          preferred college which will excel in the preparing its students who
          are future leaders ahead of a better tomorrow.
        </p>
      </motion.div>
      <motion.div 
        initial={{opacity:0.2}}
        whileInView={{opacity:1}}
        transition={{duration:0.3}}
         
      className="bg-secondary py-10 px-6 min-h-20 flex flex-col gap-4 items-center">
        <img src={icon2} alt="mission icon" />
        <p className="text-2xl font-poppins font-bold">Our Mission</p>
        <p className="text-center font-open">
          To enhance the quality of teaching and learning in the process of
          human capital development for the educational sector and the nation.
        </p>
      </motion.div>
      <motion.div
        initial={{opacity:0.2}}
        whileInView={{opacity:1}}
        transition={{duration:0.3}}   
       className="bg-[#48CFAF] py-10 px-6 min-h-20 flex flex-col gap-4 items-center">
        <img src={icon3} alt="schorlarship icon" />
        <p className="text-2xl font-poppins font-bold">Schorlarship</p>
        <p className="text-center font-open">
          Giving reference to students capacity for scholarship development that
          recognizes dignity of labour, integrity and selflessness.
        </p>
      </motion.div>
    </main>
  );
};

export default Mission;
