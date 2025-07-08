import React from "react";
import bg from "../assets/images/background.jpg";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";

const HomeSection3 = () => {
  return (
    <>
    <section 
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        objectFit:'contain'
        
      }}
      className=" flex-col md:flex-row justify-end items-center md:flex hidden bg-cover bg-center md:h-[100vh]  md:my-20 pt-20 md:pt-0"
    >
      <div className="w-full md:max-w-[550px] font-open grid grid-cols-1 md:grid-cols-2 h-full">
        {/* First Text Box */}
        <div className="bg-secondary text-accent px-4 flex flex-col justify-center gap-3 py-10 md:py-12">
          <h1 className="text-3xl font-poppins">Scholarships</h1>
          <p className="text-lg">
            We employ best hands into the classroom to nurture our students
            following the best practices and national standard.
          </p>
        </div>

        {/* First Image */}
       
        <div className="h-full">
          <img
            src={img1}
            alt="Scholarships"
            className="h-full w-full object-cover brightness-75"
          />
        </div>

        {/* Second Image */}
        <div className="h-full max-h-[54vh]">
          <img
            src={img2}
            alt="Social Activities"
            className="h-full  object-top md:max-h-[100%] w-full object-cover brightness-75"
          />
        </div>

        {/* Second Text Box */}
        <div className="bg-[#48CFAF] text-accent px-4 flex flex-col justify-center gap-3 py-10 md:py-12">
          <h1 className="text-3xl font-poppins">Social</h1>
          <p className="text-lg">
            Beyond academic excellence, every student gets to socialize in a
            safe environment.
          </p>
        </div>
      </div>
    </section>

    {/* mobile view  */}
    <div className="w-full md:max-w-[550px]  font-open grid md:hidden grid-cols-1 md:grid-cols-2">
      <div className="h-full">
          <img
            src={bg}
            alt="Scholarships"
            className="h-full w-full object-cover"
          />
        </div>
        {/* First Text Box */}
        <div className="bg-secondary text-accent px-4 flex flex-col justify-center gap-3 py-10 md:py-12">
          <h1 className="text-3xl font-poppins">Scholarships</h1>
          <p className="text-lg">
            We employ best hands into the classroom to nurture our students
            following the best practices and national standard.
          </p>
        </div>

        {/* First Image */}
       
        <div className="h-full">
          <img
            src={img1}
            alt="Scholarships"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Second Image */}
        <div className="h-full max-h-[50vh]">
          <img
            src={img2}
            alt="Social Activities"
            className="h-full max-h-[100%] object-top md:max-h-full w-full object-cover"
          />
        </div>

        {/* Second Text Box */}
        <div className="bg-[#48CFAF] text-accent px-4 flex flex-col justify-center gap-3 py-10 md:py-12">
          <h1 className="text-3xl font-poppins">Social</h1>
          <p className="text-lg">
            Beyond academic excellence, every student gets to socialize in a
            safe environment.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeSection3;
