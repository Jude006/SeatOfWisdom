  import React, { useEffect, useState } from 'react';
  import Button from './Button';
  import { Link, useLocation } from 'react-router-dom';
  import { FaBars, FaCaretDown, FaTimes } from 'react-icons/fa';

  const Navbar = () => {
    const [dropdown, setDropDown] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [sticky, setSticky] = useState(false);
    const location = useLocation();

    const toggleNav = () => {
      setShowNav(!showNav);
    };

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <header
        className={`w-full z-50 py-1 transition-transform duration-300 ease-linear  font-poppins  ${
          sticky
            ? 'sticky top-0 bg-black  backdrop-blur-md text-accent shadow-md z-50'
            : 'bg-transparent text-accent absolute md:border-b border-gray-500'
        }`}
      >
        <nav className="py-1">
          <div className="container  py-2 md:px-20 px-4 mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link to='/' className="cursor-pointer">
              <h1 className='font-poppins text-lg'>Seat Of Wisdom.</h1>
            {/* <img src="/images/logo.png" alt="logo"  className='h-[100%] w-[60px] object-cover'/> */}
            </Link>

            {/* Desktop Nav */}
            <div>
              <ul className="items-center gap-[40px] font-poppins lg:flex hidden">
                <li  
                  className={`${
                    location.pathname === '/' ? 'text-secondary' : 'text-accent'
                  } hover:text-secondary duration-300 ease-linear under }`}
                >
                  <Link  to="/">Home</Link>
                </li>
                <li
                  className={`${
                    location.pathname === '/about' ? 'text-secondary' : 'text-accent'
                  } hover:text-secondary duration-300 ease-linear under x`}
                >
                  <Link to="/about">About</Link>
                </li>
                <li
                  className={`${
                    location.pathname === '/gallery' ? 'text-secondary' : 'text-accent'
                  } hover:text-secondary duration-300 ease-linear under`}
                >
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li
                  className={`${
                    location.pathname === '/contact' ? 'text-secondary' : 'text-accent'
                  } hover:text-secondary duration-300 ease-linear under`}
                >
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li
                  className="relative"
                  onClick={() => setDropDown(!dropdown)}
                >
                  <p  className="flex items-center gap-2 text-accent cursor-pointer">
                    Portal <FaCaretDown className="text-secondary" />
                  </p>

                  {/* Dropdown */}
                  {dropdown && (
                    <div>
                      <ul className="shadow py-3 px-4 absolute flex flex-col gap-2 bg-accent rounded">
                        <li
                          className={`text-nowrap ${
                            location.pathname === '/students'
                              ? 'text-secondary'
                              : 'text-primary '
                          }`}
                        >
                          <Link
                            className="hover:text-secondary duration-300 ease-linear under text-nowrap"
                            to="/portal"
                          >
                            School Portal
                          </Link>
                        </li>
                        <li
                          className={`text-nowrap ${
                            location.pathname === '/teachers'
                              ? 'text-secondary'
                              : 'text-primary'
                          }`}
                        >
                          <Link
                            className="hover:text-secondary duration-300 ease-linear under text-nowrap"
                            to="/signIn"
                          >
                            Moderator
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>

        
            <Link to='/enrol'>
              <Button text="Form" bgColor="bg-secondary" textColor="text-primary" />
            </Link>
            <button onClick={toggleNav} className="text-2xl lg:hidden flex">
              {showNav ? <FaTimes /> : <FaBars />}
            </button>
          </div>

      
          {showNav && (
            <div className="lg:hidden flex border-t border-accent bg-black backdrop-blur-md">
              <ul className="gap-[35px] font-poppins flex flex-col px-4 py-4">
                <li onClick={()=>setShowNav(false)}
                  className={`${
                    location.pathname === '/' ? 'text-secondary' : 'text-accent'
                  } hover:text-secondary duration-300 ease-linear under`}
                >
                  <Link to="/">Home</Link>
                </li>
                <li onClick={()=>setShowNav(false)}
                  className={`${
                    location.pathname === '/about' ? 'text-secondary' : 'text-accent'
                  } hover:text-secondary duration-300 ease-linear under`}
                >
                  <Link to="/about">About</Link>
                </li>
                <li onClick={()=>setShowNav(false)}
                  className={`${
                    location.pathname === '/gallery' ? 'text-secondary' : 'text-accent'
                  } hover:text-secondary duration-300 ease-linear under`}
                >
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li onClick={()=>setShowNav(false)}
                  className={`${
                    location.pathname === '/contact' ? 'text-secondary' : 'text-accent'
                  } hover:text-secondary duration-300 ease-linear under`}
                >
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li 
                  className="relative"
                  onClick={() => setDropDown(!dropdown)}
                >
                  <p className="flex items-center gap-2 text-accent cursor-pointer">
                    Portal <FaCaretDown className="text-secondary" />
                  </p>

                  {/* Dropdown */}
                  {dropdown && (
                    <div>
                      <ul className="shadow py-3 px-4 absolute md:-left-4 bg-accent rounded">
                        <li onClick={()=>setShowNav(false)}
                          className={`text-nowrap ${
                            location.pathname === '/students'
                              ? 'text-secondary'
                              : 'text-primary'
                          }`}
                        >
                          <Link
                            className="hover:text-secondary duration-300 ease-linear under"
                            to="/portal"
                          >
                            School Portal
                          </Link>
                        </li>
                        <li onClick={()=>setShowNav(false)}
                          className={`text-nowrap ${
                            location.pathname === '/teachers'
                              ? 'text-secondary'
                              : 'text-primary'
                          }`}
                        >
                          <Link onClick={()=>setShowNav(false)}
                            className="hover:text-secondary duration-300 ease-linear under"
                            to="/signIn"
                          >
                            Moderator
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    );
  };

  export default Navbar
