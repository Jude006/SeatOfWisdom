import React from "react";
import book from "../assets/images/book.png";
import light from "../assets/images/light.png";
import pencil from "../assets/images/pencil.png";
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'

const HomeSection1 = () => {
  return (
    <section className="md:mt-[300px] mt-[900px] mb-[50px] font-open w-full grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:px-6 px-2 lg:px-28 md:pt-20 md:pb-20 pb-6 pt-16">
      <div className="py-2 px-1 flex flex-col gap-6">
        <img src={pencil} alt="" className="max-w-[80px] object-contain" />
        <h1 className="md:text-5xl font-semibold text-3xl font-poppins leading-normal">
          We are the top learning platform
        </h1>
        <p className="md:text-lg">
          Our aim is to build a community of creative and intelligent mind
          towards a better tomorrow
        </p>
        <div>
          <p>
            We provide a memorable academic experience for our students and
            pupils.
          </p>
          <p>At Amazing grace; School feels like home.</p>
        </div>
        <div className="flex w-full justify-between mt-4 items-center">
          <div className="relative flex   ">
            <button className="border-2 border-secondary hover:bg-secondary py-3 duration-300 ease-linear rounded-full max-h-[8vh]  px-8 font-bold font-poppins">
              Learn More
            </button>
            <img src={book} alt="" className="absolute top-1 -left-14 " />
          </div>
          <img src={light} alt="" className=" top-2 -left-14" />
        </div>
      </div>
      <div className="py-2 px-1  flex relative  justify-between">
    <img src={img1} alt=""  className=" object-cover left-0  z-20 md:max-h-[25vh] max-h-[15vh]  p-2 md:top-4 top-1 absolute rounded"/>
    <img src={img2} alt="" className=" object-cover z-10 max-h-[40vh] md:max-w-[400px] max-w-[350px] relative md:ml-10 ml-4 rounded"/>
    <img src={img3} alt="" className=" object-cover  right-0 z-20 md:max-h-[20vh] max-h-[15vh] md:bottom-10 bottom-4  p-2 absolute rounded"/>
      </div>
    </section>
  );
};

export default HomeSection1;
