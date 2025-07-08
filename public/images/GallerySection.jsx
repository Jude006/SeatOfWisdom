import React from "react";

const images = [
  { src: "/images/gallerya.jpg", alt: "Graduation Ceremony", title: "Graduation Day" },
  { src: "/images/galleryb.jpg", alt: "Cultural Dance", title: "Cultural Celebrations" },
  { src: "/images/galleryc.jpg", alt: "Science Lab", title: "Innovative Science Lab" },
  { src: "/images/galleryd.jpg", alt: "Student Assembly", title: "Morning Assembly" },
  { src: "/images/gallerye.jpg", alt: "Sports Field", title: "Sports Events" },
  { src: "/images/galleryf.jpg", alt: "Library", title: "Knowledge Hub" },
  { src: "/images/galleryg.jpg", alt: "Art Class", title: "Creative Arts" },
  { src: "/images/galleryh.jpg", alt: "Students in Computer Lab", title: "Modern Computer Lab" },
  { src: "/images/galleryi.jpg", alt: "Teachers and Staff", title: "Dedicated Faculty" },
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

      {/* Responsive Masonry Grid */}
      <div className="grid gap-4 grid-cols-12">
        {/* Row 1 */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center">{images[0].title}</h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center">{images[1].title}</h3>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-12 sm:col-span-4 lg:col-span-3">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center">{images[2].title}</h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-8 lg:col-span-6">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center">{images[3].title}</h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 lg:col-span-3">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[4].src}
              alt={images[4].alt}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center">{images[4].title}</h3>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-6">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[5].src}
              alt={images[5].alt}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center">{images[5].title}</h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-6">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[6].src}
              alt={images[6].alt}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center">{images[6].title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
