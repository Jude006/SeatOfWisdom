import React from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/images/gallerya.jpg", alt: "Graduation Ceremony", title: "Graduation Day" },
  { src: "/images/galleryb.jpg", alt: "Cultural Dance", title: "Cultural Celebrations" },
  { src: "/images/galleryc.jpg", alt: "Science Lab", title: "Innovative Science Lab" },
  { src: "/images/galleryd.jpg", alt: "Student Assembly", title: "Morning Assembly" },
  { src: "/images/gallerye.jpg", alt: "Sports Field", title: "Sports Events" },
  { src: "/images/galleryf.jpg", alt: "Library", title: "Knowledge Hub" },
  { src: "/images/galleryg.jpg", alt: "Art Class", title: "Creative Arts" },
  { src: "/images/bg3.jpg", alt: "Students in Computer Lab", title: "Modern Computer Lab" },
  { src: "/images/galleryf.jpg", alt: "Teachers and Staff", title: "Dedicated Faculty" },
];

const GallerySection = () => {
  return (
    <section className="py-16 px-4 lg:px-28 font-poppins">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">School Gallery</h1>
        <p className="text-lg text-gray-600">
          Dive into the vibrant life of our school through snapshots of our events, facilities, and community.
        </p>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
