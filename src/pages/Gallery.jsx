import React from 'react';
import Banner from '../components/Banner';
import Button from '../components/Button';
import GallerySection from '../components/GallerySection';

const Gallery = () => {
  const gallerySlides = [
    {
      src: "/images/bg4.jpg",
      heading: "Explore Our Campus",
      subheading:
        "A glimpse into our serene and inspiring learning environment that nurtures excellence.",
    },
    {
      src: "/images/bg2.jpg",
      heading: "Moments That Matter",
      subheading:
        "From classrooms to extracurriculars, see the moments that define our vibrant school life.",
    },
    {
      src: "/images/bg3.jpg",
      heading: "Celebrating Achievements",
      subheading:
        "Our gallery showcases the milestones and successes of our amazing students and staff.",
    },
  ];

  return (
    <>
      <Banner
        slides={gallerySlides}
        button={<Button text="View Full Gallery" bgColor="bg-secondary" textColor="text-primary" />}
      />
      <GallerySection />
    </>
  );
};

export default Gallery;
