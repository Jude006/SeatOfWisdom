import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = ({ slides ,button}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  return (
    <main className="relative">
      <section className="h-screen w-full overflow-hidden">
        <AnimatePresence>
          {slides.map(
            (slide, index) =>
              index === currentIndex && (
                <motion.div
                  key={slide.src}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.src})`,
                    backgroundColor: "#1A2741",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                ></motion.div>
              )
          )}
        </AnimatePresence>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentIndex].heading}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4 md:max-w-[95%] mx-auto">
                {slides[currentIndex].heading}
              </h1>
              <p className="text-sm md:text-lg font-light font-open md:max-w-[80%] mx-auto">
                {slides[currentIndex].subheading}
              </p>
              <div className="my-3">
              <Link to='/enrol'>{button}</Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Banner;
