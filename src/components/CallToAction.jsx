import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import Button from "./Button";

const CallToAction = () => {
  const navigate = useNavigate(); 

  return (
    <section className="bg-gradient-to-r from-accent to-primary text-white py-16 mt-10 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
  
        <motion.div
          className="md:w-2/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            Ready to Give Your Child the Best Education?
          </h2>
          <p className="mt-4 text-lg font-open">
            Our school offers world-class facilities, a nurturing environment,
            and the best teachers to shape your child’s future.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          onClick={() => navigate("/enrol")} 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
        <Button text='Enrol Now' bgColor='bg-secondary' />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
