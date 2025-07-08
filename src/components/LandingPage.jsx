import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Mission from "./Mission";

const images = [
  {
    src: "/images/bg4.jpg",
    heading: "Welcome to Seat of Wisdom Private School",
    subheading: "Where knowledge is guided by values, and every child is inspired to shine.",
  },
  {
    src: "/images/bg2.jpg",
    heading: "Integrity. Excellence. Purpose.",
    subheading: "At Seat of Wisdom, we nurture discipline and character for a future built on strong foundations.",
  },
  {
    src: "/images/bg3.jpg",
    heading: "Igniting Curiosity Through Science & Innovation",
    subheading: "We equip young minds to explore boldly and lead with creativity in a changing world.",
  },
  {
    src: "/images/bg1.jpg",
    heading: "Excellence in Every Step",
    subheading: "Committed to quality education that shapes confident learners and responsible leaders.",
  },
];


const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative">

       {/* <Mission /> */}
      <section className="h-screen w-full  overflow-hidden">
       
        <AnimatePresence>
          {images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.div
                  key={image.src}
                  className={`absolute inset-0 bg-cover bg-center bg-primary bg-opacity-25`}
                  style={{ backgroundImage: `url(${image.src})`, backgroundColor:'#1A2741' }}
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
              key={images[currentIndex].heading}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4 md:max-w-[95%] mx-auto">
                {images[currentIndex].heading}
              </h1>
              <p className="text-lg md:text-2xl font-light font-open">
                {images[currentIndex].subheading}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
