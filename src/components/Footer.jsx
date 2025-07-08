import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="bg-primary  ">
      <div className=" text-accent grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-14 md:py-14 py-10 md:px-10 lg:px-24 px-4">
        <div className="flex flex-col gap-4 font-open">
          <h1 className="text-2xl  font-bold font-poppins">Seat Of Wisdom</h1>
          <p className="text-[16px] font-open">
           Seat Of Wisdom Private School. We nurture your child Towards a better
            tomorrow. Enrol today.
          </p>
          <FaInstagram className="p-2 bg-accent text-primary hover:text-secondary duration-300 ease-linear text-5xl rounded shadow" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-center text-start border-b font-poppins">
            Quick Links
          </h2>
          <div className="grid grid-cols-2 font-poppins">
            <ul className="font-semibold  flex flex-col gap-3">
              <li
                className={`${
                  location.pathname === "/" ? "text-secondary" : "text-accent"
                } hover:text-secondary duration-300 ease-linear`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/about"
                    ? "text-secondary"
                    : "text-accent"
                } hover:text-secondary duration-300 ease-linear`}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/gallery"
                    ? "text-secondary"
                    : "text-accent"
                } hover:text-secondary duration-300 ease-linear`}
              >
                <Link to="/gallery">Gallery</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/contact"
                    ? "text-secondary"
                    : "text-accent"
                } hover:text-secondary duration-300 ease-linear`}
              >
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <ul className=" font-semibold  flex flex-col gap-3">
              <li
                className={`${
                  location.pathname === "/students"
                    ? "text-secondary"
                    : "text-accent"
                } hover:text-secondary duration-300 ease-linear`}
              >
                <Link to="/students">Students Portal</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/teachers"
                    ? "text-secondary"
                    : "text-accent"
                } hover:text-secondary duration-300 ease-linear`}
              >
                <Link to="/teachers">Teachers Portal</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold font-poppins border-b ">Contact</h3>
          <div className="flex flex-col gap-4 mt-4 font-open">
            <p>
              Location : 8/10, Modupe Akinrinade Str, Off Amoke Are Street, Adalemo Sango-Ota. Ogun state.
              </p>
            <p className="md:text-[16px] text-sm">Email:Seatofwisdomprivateschools@gmail.com</p> 
            <p className="md:text-[16px] text-sm">Phone:08068078495</p>
          </div>
        </div>
      </div>
      {/* last bar */}
      <div className="font-poppins py-4 shadow flex justify-between items-center text-accent bg-[#16223B] md:px-10 lg:px-24 px-4">
        <p className="md:text-lg">Designed & Developed By <span className="text-secondary"><Link to='https://portfolio-virid-kappa.vercel.app/'>JTech</Link></span></p>
        <p className="md:text-lg ">© Copyrights 2024 Seat Of Wisodom. All rights reserved.</p>
      </div>
      {/* last bar */}
    </footer>
  );
};

export default Footer;
